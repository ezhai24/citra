import client from '~/graphql/client';
import { getPost } from '~/graphql/queries';
import ArticleComponent from '~/scenes/Blog/Article';

const Article = (props) => <ArticleComponent {...props} />;
export default Article;

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: getPost,
    variables: {
      slug: context.params.slug,
    },
  });
  return { props: { ...data.postById } };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
