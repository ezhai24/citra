import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import client from '~/graphql/client';
import routes from '~/shared/routes';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (window) {
      // Set the article hash when a blog article page is visited
      if (router.asPath === routes.blogArticle(pageProps.slug)) {
        window.sessionStorage.setItem('article-hash', pageProps.slug);
        return;
      }

      // Remove the hash if a page is visited in between the blog article page
      // and the blog page itself
      if (router.asPath !== routes.blog) {
        window.sessionStorage.removeItem('article-hash');
        return;
      }

      // Otherwise, user is returning to the blog page from a blog article. Jump
      // to the corresponding article. If the given hash does not match any of
      // the articles in the first set that's loaded, jump to bottom of page.
      const articleHash = window.sessionStorage.getItem('article-hash');
      if (router.asPath === routes.blog && articleHash) {
        if (pageProps.posts.find(post => post.node.slug === articleHash)) {
          router.push(routes.blog + '#' + articleHash);
        } else {
          window.scrollTo(0, document.body.scrollHeight);
        }
      }
    }
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
