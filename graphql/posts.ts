import { gql } from 'apollo-server-micro';
import fs from 'fs';

import { paginateResults } from './utils';

const typeDefs = gql`
  type Query {
    posts(pageSize: Int, after: String): PaginatedPosts!
    postById(slug: String!): Post!
  }
  type PaginatedPosts {
    edges: [PostEdge!]!
    pageInfo: PostPageInfo!
  }
  type PostEdge {
    node: Post!
    cursor: String!
  }
  type Post {
    title: String!
  }
  type PostPageInfo {
    hasNextPage: Boolean!
    nextPage: String
    hasPrevPage: Boolean!
    prevPage: String
    totalCount: Int!
  }
`;

const blogDir = 'blog';
const blogPostSlugs = fs.readdirSync(blogDir);
blogPostSlugs.sort((a, b) =>
  fs.statSync(`${blogDir}/${b}`).mtime.getTime() - fs.statSync(`${blogDir}/${a}`).mtime.getTime(),
);

const getCursor = (postSlug: string) => Buffer.from(postSlug).toString('base64');

const resolvers = {
  Query: {
    async posts(_parent, { pageSize = 20, after }) {
      const { edges: slugs, pageInfo } = paginateResults({
        results: blogPostSlugs,
        pageSize,
        cursor: after,
        getCursor,
      });

      const postEdges = [];
      for (const slug of slugs) {
        try {
          const post = await import(`blog/${slug}`);
          postEdges.push({
            node: post.default,
            cursor: getCursor(slug),
          });
        } catch {
          console.log(`Could not find post blog/${slug}`);
        }
      }
      return { 
        edges: postEdges,
        pageInfo,
      };
    },

    async postById(_parent, { slug }) {
      try {
        const post = await import(`blog/${slug}`);
        return post.default;
      } catch {
        return null;
      }
    }
  },
};

export default {
  typeDefs,
  resolvers,
};
