import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    textTransform: 'capitalize',
  },
  header: {
    textTransform: 'capitalize',
  },
}));

const addEditPost = (data) => {

};

const addEditComment = (data) => {

};

export default function NewsFeedForm(props) {
  const classes = useStyles();
  const { type, id } = props;

  const handleSubmit = () => {
    if (type === 'post') {
      addEditPost({ id });
    } else if (type === 'comment') {
      addEditComment({ id });
    }
  }

  return (
    <React.Fragment>
      <Paper>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Add your status"
          />
          <Button
            color="primary"
            variant="outlined"
            type="submit"
          >Post</Button>
        </form>
      </Paper>
    </React.Fragment>
  );
}
