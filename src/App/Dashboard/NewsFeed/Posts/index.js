import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Post from './Post';
import POSTS from './PostsQuery';
import { Button } from '@material-ui/core';
import uniqueArray from '../../../../utils/UniqueArray';

export default function Posts() {
  const { loading, error, data, fetchMore } = useQuery(POSTS, { variables: { page: 1 } });
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

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <React.Fragment>
      {data.posts.list.map((post) => <Post key={post.id} post={post} />)}
      <Button onClick={pagination}>Fetch More</Button>
    </React.Fragment>
  )
}
