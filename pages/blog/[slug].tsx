import postsResolver from '~/graphql/posts';
import ArticleComponent from '~/scenes/Blog/Article';

const Article = (props) => <ArticleComponent {...props} />;
export default Article;

export const getStaticProps = async (context) => {
  const data = await postsResolver.resolvers.Query.postById({}, { slug: context.params.slug });
  return { props: { ...data } };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
