import postsResolver from '~/graphql/posts';
import BlogComponent from '~/scenes/Blog';

const Blog = (props) => <BlogComponent {...props} />;
export default Blog;

export const getStaticProps = async () => {
  try {
    const data = await postsResolver.resolvers.Query.posts({}, { pageSize: 20, after: null });
    return { props: { posts: data.edges, pageInfo: data.pageInfo } };
  } catch {
    return { props: { posts: null }};
  }
}
