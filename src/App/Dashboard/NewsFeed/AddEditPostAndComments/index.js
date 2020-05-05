import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import ADD_POST from './CreatePostQuery';
import UPDATE_POST from './UpdatePostQuery';
import CREATE_COMMENT from './CreateCommentQuery';
import updatePostsListOnCreate from './UpdatePostsListOnCreate';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }
}));

export default function NewsFeedForm({ type = 'post', postID = '', id = '', oldContent = '', cancelEdit, inList = false }) {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const [addPost, { loading }] = useMutation(ADD_POST, {
    onCompleted: () => setContent(''),
    update: updatePostsListOnCreate,
  });
  const [updatePost, { loading: updateLoading }] = useMutation(UPDATE_POST, {
    onCompleted: () => cancelEdit && cancelEdit(),
  });

  const [addComment, { loading: addCommentLoading }] = useMutation(CREATE_COMMENT, {
    onCompleted: () => setContent(''),
  });

  useEffect(() => {
    id && setContent(oldContent);
  }, [oldContent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'post') {
      id
        ? updatePost({ variables: { id, content } })
        : addPost({ variables: { content } });
    } else if (type === 'comment' && postID) {
      addComment({ variables: {post: postID, content} })
    }
  }

  return (
    <Paper className={`${inList ? '' : classes.root}`}>
      <form onSubmit={handleSubmit}>
        <TextField
          multiline
          rows={2}
          rowsMax={6}
          placeholder="Add your status"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button disabled={loading || updateLoading || addCommentLoading} type="submit">{id ? 'Update' : 'Post'}</Button>
        {id && cancelEdit && <Button type="button" color="secondary" onClick={cancelEdit}>Cancel Edit</Button>}
      </form>
    </Paper>
  );
}
