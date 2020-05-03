import { gql } from 'apollo-boost';

export default gql`
mutation UpdatePost($id: ID!, $content: String!) {
  updatePost(id: $id, content: $content) {
    content
    id
    author {
      id
      name
    }
  }
}
`;
