import styled from '@emotion/styled';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { Navigation, Footer } from '~/components';

const Body = styled.body({
  margin: 0,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  '&a:hover': {
    cursor: 'pointer',
  }
});

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&family=Oswald:wght@200;300&family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Body>
          <Navigation />
          <Main />
          <Footer />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default Document;