import styled from '@emotion/styled';
import moment from 'moment-timezone';
import Head from 'next/head';
import Link from 'next/link';

import { Post } from '~/graphql/types';
import routes from '~/shared/routes';
import { Colors } from '~/shared/styles';

const Root = styled.div({
  width: '90%',
  maxWidth: 1028,
  margin: '0 auto',
  '& img': {
    width: '100%',
  }
});

const Breadcrumb = styled.div({
  margin: '32px 0',
  '& a': {
    color: Colors.NEUTRALS.BLACK,
  },
});

const Image = styled.div(({ src }: { src: string }) => ({
  height: 200,
  width: '100%',
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

const Title = styled.h1({
  marginTop: 24,
  marginBottom: 0,
  fontFamily: 'Fraunces, serif',
  fontSize: 50,
});

const Byline = styled.p({
  marginTop: 8,
  marginBottom: 32,
  fontStyle: 'italic',
});

const Article = ({ slug, image, title, description, createdAt, content }: Post) => {
  return (
    <Root>
      <Head>
        <title>{title} - Citra</title>
        <meta property="og:title" content={`${title} - Citra`} />
        <meta property="og:url" content={process.env.HOST + routes.blogArticle(slug)} />
        <meta property="og:image" content={process.env.HOST + image} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
      </Head>

      <Breadcrumb>
        <Link href={routes.blog}>Blog</Link> &gt; {title}
      </Breadcrumb>
      <Image src={image} />
      <Title>{title}</Title>
      <Byline>Published {moment(createdAt).format('MMM D, YYYY')}</Byline>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Root>
  );
}

export default Article;
