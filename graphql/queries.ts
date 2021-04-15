import { gql } from '@apollo/client';

export const getPosts = gql`
  query getPosts {
    posts {
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
    }
  }
`;

export const getPost = gql`
  query getPost($slug: String!) {
    postById(slug: $slug) {
      title
      image
      description
      createdAt
      content
    }
  }
`;
