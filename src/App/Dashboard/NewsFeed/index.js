import React from 'react';
import Posts from './Posts/index';
import NewsFeedForm from './AddEditPostAndComments';

function NewsFeed() {
  return (
    <React.Fragment>
      <NewsFeedForm type="post" />
      <Posts />
    </React.Fragment>
  )
}

export default NewsFeed;
