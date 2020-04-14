import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Posts from './Posts/index';

const POSTS = gql`
{
  posts {
    id
    content
    comments {
      id
      content
      author {
        id
        name
      }
    }
    author {
      id
      name
    }
  }
}
`;

function NewsFeed() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Posts posts={data.posts} />
}

export default NewsFeed;
