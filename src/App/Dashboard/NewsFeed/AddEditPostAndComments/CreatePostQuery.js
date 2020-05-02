import { gql } from 'apollo-boost';

export default gql`
mutation CreatPost($content: String!) {
  createPost(content: $content) {
    content
    id
    author {
      id
      email
      name
    }
  }
}
`;
