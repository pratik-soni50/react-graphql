import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, ListItem, List, ListItemAvatar, ListItemText, Typography, Divider, IconButton } from '@material-ui/core';
// import List from '@material-ui/core/List';
import Comment from './Comment';
import NewsFeedForm from '../../AddEditPostAndComments';

import useCurrentUser from '../../../../../Hooks/CurrentUser';

export default function Comments({ comments, postID }) {
  const currentUser = useCurrentUser();
  return (
    <List>
      {
        comments && comments.length > 0 &&
        comments.map(comment => <Comment key={comment.id} comment={comment} />)
      }
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            // className={classes.avatar}
            aria-label={currentUser.name}>{currentUser.name && currentUser.name.charAt(0)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <NewsFeedForm inList
              type="comment"
              postID={postID}
              />
            </React.Fragment>
          }
          secondaryTypographyProps={{
            component: 'div',
          }}
        />
      </ListItem>
    </List>
  )
}
