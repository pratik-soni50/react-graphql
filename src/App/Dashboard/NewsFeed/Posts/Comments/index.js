import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Comment from './Comment';

export default function Comments({ comments }) {
  return (
    <React.Fragment>
      {
        comments && comments.length > 0 &&
        <CardContent>
          <List>
            {
              comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
          </List>
        </CardContent>
      }
    </React.Fragment>
  )
}
