import { gql } from 'apollo-boost';

export default gql`
query Posts($page: Int) {
  posts(page: $page perPage: 10) {
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
