import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Post from './Post';
import POSTS from './PostsQuery';

export default function Posts() {
  const { loading, error, data, fetchMore } = useQuery(POSTS, { variables: { page: 1 } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.list.map((post) => <Post key={post.id} post={post} />);
}
