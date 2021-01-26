import styled from '@emotion/styled';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { Navigation } from '~/components';

const Body = styled.body({
  margin: 0,
  fontFamily: 'Roboto, sans-serif',
});

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&family=Oswald:wght@200&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Body>
          <Navigation />
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default Document;