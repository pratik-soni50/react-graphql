import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Posts from './Posts/index';
import NewsFeedForm from './AddEditPostAndComments';

const POSTS = gql`
{
  posts {
    count
    list {
      id
      content
      author {
        id
        name
      }
      comments {
        id
        content
        author {
          id
          name
        }
      }
    }
  }
}

`;

function NewsFeed() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <React.Fragment>
      <NewsFeedForm type="post" />
      <Posts posts={data.posts.list} />
    </React.Fragment>
  )
}

export default NewsFeed;
