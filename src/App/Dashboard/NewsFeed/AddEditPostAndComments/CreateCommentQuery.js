import { gql } from 'apollo-boost';

export default gql`
mutation CreateComment($content: String!, $post: ID!) {
  createComment(content: $content, post: $post) {
    id
    post {
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
