import { gql } from 'apollo-server-micro';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import path from 'path';

import { paginateResults } from './utils';

export const typeDefs = gql`
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

const blogDir = path.join(process.cwd(), 'blog');
const blogPostSlugs = fs.readdirSync(blogDir);
blogPostSlugs.sort((a, b) => {
  const filePathA = path.join(blogDir, `${a}.md`);
  const filePathB = path.join(blogDir, `${b}.md`);
  return fs.statSync(filePathA).birthtimeMs - fs.statSync(filePathB).birthtimeMs;
});

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
        const filePath = path.join(blogDir, `${slug}.md`);

        try {
          const fileContent = fs.readFileSync(filePath);
          const meta = matter(fileContent);
          const content = marked(meta.content);
          postEdges.push({
            node: {
              // Remove file extension
              slug: slug.split('.')[0],
              title: meta.data.title,
              image: meta.data.image,
              description: meta.data.description,
              createdAt: fs.statSync(filePath).birthtime.toISOString(),
              content,
            },
            cursor: getCursor(slug),
          });
        } catch {
          console.log(`Could not find post ${filePath}`);
        }
      }
      return {
        edges: postEdges,
        pageInfo,
      };
    },

    async postById(_parent, { slug }) {
      try {
        const filePath = path.join(blogDir, `${slug}.md`);
        const fileContent = fs.readFileSync(filePath);
        const meta = matter(fileContent);
        const content = marked(meta.content);
        return {
          slug,
          title: meta.data.title,
          image: meta.data.image,
          description: meta.data.description,
          createdAt: fs.statSync(filePath).birthtime.toISOString(),
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
