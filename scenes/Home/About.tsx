import styled from '@emotion/styled';
import Link from 'next/link';

import { Button } from '~/components';
import images from '~/shared/images';
import routes from '~/shared/routes';
import { Colors, mq } from '~/shared/styles';

const Root = styled.div({
  display: 'flex',
  width: '90%',
  margin: '0px auto',
  marginTop: 48,
  backgroundColor: Colors.NEUTRALS.GRAY,
  [mq[0]]: {
    flexDirection: 'column',
  },
});

const Image = styled.div({
  flex: 1,
  minHeight: 300,
  backgroundImage: `url(${images.MILK_CAP_CAT})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const Content = styled.div({
  flex: 1,
  display: 'flex',
  margin: 64,
  alignItems: 'center',
});

const SectionTitle = styled.h3({
  fontFamily: 'Oswald, sans-serif',
  textTransform: 'uppercase',
});

const Excerpt = styled.h2({
  fontFamily: 'Fraunces, serif',
});

const Description = styled.p({
  marginBottom: 32,
});

const About = () => (
  <Root>
    <Image />
    <Content>
      <div>
        <SectionTitle>Fresh flavors, familiar faces</SectionTitle>
        <Excerpt>
          From fresh tapioca made in-store daily to locally sourced Herkimer 
          coffee beans, scratch-made sweet treats to hand-prepared bagels,
        </Excerpt>
        <Description>
          Citra believes in the power of quality and community. Everything we make, 
          we make with care because we know how important it is to do right by the 
          people who support us. And whether its you're first time visiting or you're 
          hundredth, we'd love to see you in!
        </Description>
        <Link href={routes.menu}>
          <Button>View Our Full Menu</Button>
        </Link>
      </div>
    </Content>
  </Root>
);

export default About;
