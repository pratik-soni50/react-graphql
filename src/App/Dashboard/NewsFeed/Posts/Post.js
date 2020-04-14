import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import Comments from '../Comments';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  avatar: {
    textTransform: 'capitalize',
  },
  header: {
    textTransform: 'capitalize',
  },
}));

export default function Post({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar
            className={classes.avatar}
            aria-label={post.author.name}>{post.author.name && post.author.name.charAt(0)}</Avatar>
        }
        title={post.content}
        subheader={`by ${post.author.name} on September 14, 2016`}
      />
      <Comments comments={post.comments} />
    </Card>
  )
}
