import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import moment from 'moment-timezone';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import Button from '~/components/Button';
import { getPosts } from '~/graphql/queries';
import { GetPostsQuery } from '~/graphql/types';
import { images } from '~/shared/assets';
import routes from '~/shared/routes';
import { mq, Colors } from '~/shared/styles';

const Root = styled.div(({ center }: { center?: boolean }) => ({
  width: '90%',
  maxWidth: 1028,
  margin: '0px auto',
  textAlign: center ? 'center' : 'left',
}));

const Breadcrumb = styled.div({
  margin: '32px 0px',
});

const Card = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 32,
  border: `1px solid ${Colors.NEUTRALS.DARKGRAY}`,
  ':hover': {
    cursor: 'pointer',
  },
  [mq[0]]: {
    flexDirection: 'column',
  },
});

const Image = styled.div(({ src }: { src: string }) => ({
  flex: 1,
  minHeight: 200,
  backgroundImage: `url(${src})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 32,
});

const Title = styled.h3({
  margin: 0,
  fontWeight: 300,
  fontFamily: 'Oswald, sans-serif',
  textTransform: 'uppercase',
});

const Description = styled.p({
  fontFamily: 'Fraunces, serif',
});

const Date = styled.p({
  display: 'flex',
  alignItems: 'flex-end',
  flex: 1,
  margin: 0,
  color: Colors.NEUTRALS.DARKGRAY,
  fontStyle: 'italic',
});

const MorePostsButton = styled(Button)({
  width: '100%',
});

interface Props {
  posts: GetPostsQuery['posts']['edges'];
  pageInfo: GetPostsQuery['posts']['pageInfo'];
}

const Blog = (props: Props) => {
  const [posts, setPosts] = useState(props.posts);
  const [pageInfo, setPageInfo] = useState(props.pageInfo);

  const [loadMorePosts] = useLazyQuery<GetPostsQuery>(getPosts, {
    variables: { pageSize: 20, after: props.pageInfo.nextPage },
    onCompleted: (data) => {
      setPosts([...posts, ...data.posts.edges]);
      setPageInfo(data.posts.pageInfo);
    }
  });

  if (posts.length === 0) {
    return <Root center>No posts yet - check back later!</Root>;
  }

  return (
    <Root>
      <Head>
        <title>Blog - Citra | Bubble Tea Cafe - Seattle, Washington</title>
        <meta property="og:title" content="Blog - Citra | Bubble Tea Cafe - Seattle, Washington" />
        <meta property="og:url" content={process.env.HOST + routes.blog} />
        <meta property="og:image" content={process.env.HOST + images.SNOW_ICE} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Featured flavors, bubble tea how-tos, and the latest at Citra." />
      </Head>

      <Breadcrumb>Blog</Breadcrumb>
      {posts.map(post => {
        const id = post.cursor;
        const { slug, title, image, description, createdAt } = post.node;
        return (
          <Link key={id} href={routes.blogArticle(slug)}>
            <Card id={slug}>
              <Image src={image} />
              <Content style={{ flex: 1 }}>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Date>{moment(createdAt).format('MMM D, YYYY')}</Date>
              </Content>
            </Card>
          </Link>
        );
      })}

      {pageInfo.hasNextPage &&
        <MorePostsButton onClick={loadMorePosts}>MORE POSTS</MorePostsButton>
      }
    </Root>
  );
}

export default Blog;
