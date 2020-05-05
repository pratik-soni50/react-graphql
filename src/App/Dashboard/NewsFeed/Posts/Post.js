import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Comments from './Comments';
import useCurrentUser from '../../../../Hooks/CurrentUser';
import NewsFeedForm from '../AddEditPostAndComments';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  inline: {
    display: 'inline',
  },
  primaryText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  const currentUser = useCurrentUser();
  const [isEditMode, setEditMode] = useState(false);

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            aria-label={post.author.name}>{post.author.name && post.author.name.charAt(0)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          classes={{
            primary: classes.primaryText,
          }}
          primary={
            <React.Fragment>
              <span>
                {post.author.name}
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {` — on September 14, 2016`}
                </Typography>
              </span>
              {post.author.id === currentUser.id
                && <span>
                  <IconButton onClick={() => { setEditMode(true) }}
                    aria-label="delete" color="primary"
                    className={classes.margin} size="small"
                    disabled={isEditMode}>
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" color="secondary" className={classes.margin} size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </span>}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              {isEditMode ? <NewsFeedForm
                id={post.id}
                oldContent={post.content}
                inList
                cancelEdit={() => {
                  setEditMode(false);
                }}
              /> : <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >{post.content}</Typography>
                  <Comments comments={post.comments} postID={post.id} />
                </React.Fragment>
              }
            </React.Fragment>
          }
          secondaryTypographyProps={{
            component: 'div',
          }}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  )
}
