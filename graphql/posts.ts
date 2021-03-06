import { gql } from 'apollo-server-micro';
import fs from 'fs';

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    postById(slug: String!): Post!
  }
  type Post {
    title: String!
  }
`;

const blogDir = 'blog';
const blogPostSlugs = fs.readdirSync(blogDir);
blogPostSlugs.sort((a, b) =>
  fs.statSync(`${blogDir}/${b}`).mtime.getTime() - fs.statSync(`${blogDir}/${a}`).mtime.getTime(),
);

const resolvers = {
  Query: {
    async posts() {
      const posts = [];
      for (const slug of blogPostSlugs) {
        try {
          const post = await import(`blog/${slug}`);
          posts.push(post);
        } catch {
          console.log(`Could not find post blog/${slug}`);
        }
      }
      return posts;
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
