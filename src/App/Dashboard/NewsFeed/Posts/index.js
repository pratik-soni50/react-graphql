import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import { Button, List } from '@material-ui/core';

import Post from './Post';
import POSTS from './PostsQuery';
import uniqueArray from '../../../../utils/UniqueArray';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Posts() {
  const classes = useStyles();
  const { loading, error, data, fetchMore } = useQuery(POSTS, {
    variables: { page: 1 },
  });
  const [page, setPage] = useState(1);
  const pagination = () => {
    fetchMore({
      variables: { page: page + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        fetchMoreResult.posts.list = uniqueArray([...prev.posts.list, ...fetchMoreResult.posts.list], 'id');
        setPage(fetchMoreResult.posts.currentPage || page + 1);
        return fetchMoreResult;
      }
    });
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <React.Fragment>
      {!loading
        && <List className={classes.list}>{data.posts.list.map((post) => <Post key={post.id} post={post} />)}</List>}
      {loading && <p>Loading...</p>}
      <Button disabled={loading} onClick={pagination}>Fetch More</Button>
    </React.Fragment>
  )
}
