import { gql } from 'apollo-server-micro';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

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
    slug: String!
    title: String!
    image: String!
    description: String!
    createdAt: String!
    content: String!
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
  fs.statSync(`${blogDir}/${b}`).birthtimeMs - fs.statSync(`${blogDir}/${a}`).birthtimeMs,
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
          const fileContent = await import(`blog/${slug}`);
          const meta = matter(fileContent.default);
          const content = marked(meta.content);
          postEdges.push({
            node: {
              // Remove file extension
              slug: slug.split('.')[0],
              title: meta.data.title,
              image: meta.data.image,
              description: meta.data.description,
              createdAt: fs.statSync(`${blogDir}/${slug}`).birthtime.toISOString(),
              content,
            },
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
        const fileContent = await import(`blog/${slug}.md`);
        const meta = matter(fileContent.default);
        const content = marked(meta.content);
        return {
          slug,
          title: meta.data.title,
          image: meta.data.image,
          description: meta.data.description,
          createdAt: fs.statSync(`${blogDir}/${slug}.md`).birthtime.toISOString(),
          content,
        };
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
