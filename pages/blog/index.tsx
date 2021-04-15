import client from '~/graphql/client';
import { getPosts } from '~/graphql/queries';
import BlogComponent from '~/scenes/Blog';

const Blog = (props) => <BlogComponent {...props} />;
export default Blog;

export const getStaticProps = async () => {
  try {
    const { data } = await client.query({ query: getPosts });
    const posts = data.posts.edges;
    return { props: { posts } };
  } catch {
    return { props: { posts: null }};
  }
}
