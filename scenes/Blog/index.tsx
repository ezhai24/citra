import styled from '@emotion/styled';
import moment from 'moment-timezone';

import { mq, Colors } from '~/shared/styles';
import { isNil } from '~/shared/utils';

const Root = styled.div({
  width: '90%',
  maxWidth: 1028,
  margin: '0px auto',
});

const Breadcrumb = styled.div({
  margin: '32px 0px',
});

const Card = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 32,
  border: `1px solid ${Colors.NEUTRALS.DARKGRAY}`,
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

// TODO: Type using graphql-codegen
interface Props {
  posts: any[];
}

const Blog = ({ posts }: Props) => {
  if (isNil(posts)) {
    return <div>No blog posts found!</div>;
  }

  return (
    <Root>
      <Breadcrumb>Blog</Breadcrumb>
      {posts.map(post => {
        const id = post.cursor;
        const { title, image, description, createdAt } = post.node;
        return (
          <Card key={id}>
            <Image src={image} />
            <Content style={{ flex: 1 }}>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Date>{moment(createdAt).format('MMM D, YYYY')}</Date>
            </Content>
          </Card>
        );
      })}
    </Root>
  );
}

export default Blog;
