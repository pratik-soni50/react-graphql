import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Comment from './Comment';

export default function Comments({ comments }) {
  return (
    <React.Fragment>
      {
        comments && comments.length > 0 &&
        <CardContent>
          {
            comments.map(comment => <Comment comment={comment} />)
          }
        </CardContent>
      }
    </React.Fragment>
  )
}
