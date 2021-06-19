import { gql } from '@apollo/client';

export const getPosts = gql`
  query getPosts($pageSize: Int, $after: String) {
    posts(pageSize: $pageSize, after: $after) {
      edges {
        node {
          slug
          title
          image
          description
          createdAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        nextPage
      }
    }
  }
`;
