import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles((theme) => ({
  avatar: {
    textTransform: 'capitalize',
  },
  header: {
    textTransform: 'capitalize',
  },
}));

export default function Comment({ comment }) {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar aria-label={comment.author.name} className={classes.avatar}>
          {comment.author.name && comment.author.name.charAt(0)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={comment.content}
        secondary={`by ${comment.author.name} on Jan 9, 2014`}
      />
    </ListItem>
  )
} 