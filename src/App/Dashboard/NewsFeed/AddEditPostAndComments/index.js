import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import ADD_POST from './CreatePostQuery';
import updatePostsListOnCreate from './UpdatePostsListOnCreate';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }
}));

export default function NewsFeedForm({ type = 'post', id = null, oldContent = '' }) {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const [addPost, { loading }] = useMutation(ADD_POST, {
    onCompleted: () => setContent(''),
    update: updatePostsListOnCreate,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      variables: { content },
    });
  }

  return (
    <Paper className={classes.root} >
      <form onSubmit={handleSubmit}>
        <TextField
          multiline
          rows={2}
          rowsMax={6}
          placeholder="Add your status"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button disabled={loading} type="submit">Post</Button>
      </form>
    </Paper>
  );
}
