import { gql } from '@apollo/client';

export const getPosts = gql`
  query getPosts {
    posts {
      edges {
        node {
          title
          image
          description
          createdAt
        }
        cursor
      }
    }
  }
`;
