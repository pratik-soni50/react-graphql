import POSTS from '../Posts/PostsQuery';

export default function updatePostsListOnCreate(store, { data }) {
  const postsData = store.readQuery({
    query: POSTS,
    variables: { page: 1 },
  });
  data.createPost.comments = [];
  store.writeQuery({
    query: POSTS,
    variables: { page: 1 },
    data: {
      posts: {
        count: postsData.posts.count + 1,
        list: [data.createPost, ...postsData.posts.list],
        __typename: 'postsList',
      }
    }
  });
}
