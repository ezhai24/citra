import { ApolloProvider } from '@apollo/client';
import client from '~/graphql/client';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
