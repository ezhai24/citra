import styled from '@emotion/styled';
import moment from 'moment-timezone';
import Head from 'next/head';
import Link from 'next/link';

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

// TODO: Type using graphql-codegen
interface Props {
  image: string;
  title: string;
  createdAt: string;
  content: string;
}

const Article = ({ image, title, createdAt, content }: Props) => {
  return (
    <Root>
      <Head>
        <title>{title} - Citra</title>
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
