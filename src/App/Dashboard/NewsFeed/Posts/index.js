import React from 'react';
import Post from './Post';

export default function Posts({ posts }) {
  return posts.map((post) => <Post post={post} />);
}
