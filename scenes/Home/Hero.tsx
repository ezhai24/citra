import styled from '@emotion/styled';
import Link from 'next/link';

import { Button } from '~/components';
import images from '~/shared/images';
import routes from '~/shared/routes';
import { mq, Colors } from '~/shared/styles';

const Root = styled.div({
  display: 'flex',
  height: 600,
  [mq[0]]: {
    flexDirection: 'column',
  },
});

const HeroImage = styled.div({
  flex: 3,
  backgroundImage: `url(${images.SNOW_ICE})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  [mq[0]]: {
    flex: 'none',
    height: 300,
  },
});

const HeroContent = styled.div({
  flex: 2,
  display: 'flex',
  paddingLeft: '10%',
  paddingRight: '10%',
  backgroundColor: Colors.BRAND.LIGHT,
  flexDirection: 'column',
  justifyContent: 'center',
  [mq[0]]: {
    flex: 'none',
    padding: 50,
    alignItems: 'center',
    textAlign: 'center',
  }
});

const Title = styled.h1({
  margin: 0,
  fontFamily: 'Oswald, sans-serif',
  fontSize: 64,
  [mq[0]]: {
    fontSize: 32,
  }
});

const Subtitle = styled.p({
  fontFamily: 'Fraunces, serif',
});

const CTA = styled(Button)({
  width: 200,
  marginTop: 20,
});

const Hero = () => {
  return (
    <Root>
      <HeroImage></HeroImage>
      <HeroContent>
        <Title>MORE THAN JUST BUBBLE TEA</Title>
        <Subtitle>
          Try <i>something different</i>.
        </Subtitle>
        <Link href={routes.menu}>
          <CTA primary filled>
            View Our Menu
          </CTA>
        </Link>
      </HeroContent>
    </Root>
  );
};

export default Hero;
