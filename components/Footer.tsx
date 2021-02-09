import styled from '@emotion/styled';

import { icons } from '~/shared/assets';
import routes from '~/shared/routes';
import { Colors } from '~/shared/styles';

const Root = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '64px 0',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const Title = styled.h2({
  fontFamily: 'Oswald, sans-serif',
});

const Address = styled.a({
  marginBottom: 16,
  color: Colors.NEUTRALS.BLACK,
  fontStyle: 'italic',
  '>p': {
    margin: 0,
  },
});

const Phone = styled.a({
  marginBottom: 64,
  color: Colors.NEUTRALS.BLACK,
  fontStyle: 'italic',
});

const Icons = styled.div({
  marginTop: 24,
  marginBottom: 32,
});

const Icon = styled.img({
  height: 24,
  width: 24,
  margin: '0px 8px',
});

const Copyright = styled.div({
  margin: 0,
  color: Colors.NEUTRALS.DARKGRAY,
});

const IconCredit = styled.div({
  width: '90%',
  margin: '8px auto 0',
  color: Colors.NEUTRALS.DARKGRAY,
});

const Footer = () => (
  <Root>
    <Title>CITRA</Title>

    <Address href={routes.directions}>
      <p>4730 University Way NE #105</p>
      <p>Seattle WA, 98105</p>
    </Address>

    <Phone href={routes.phone}>(206) 327-9012</Phone>

    <Icons>
      <a href={routes.instagram}>
        <Icon src={icons.INSTAGRAM} alt='Instagram icon' />
      </a>
      <a href={routes.facebook}>
        <Icon src={icons.FACEBOOK} alt='Facebook icon' />
      </a>
      <a href={routes.yelp}>
        <Icon src={icons.YELP} alt='Yelp icon' />
      </a>
    </Icons>

    <div>
      <Copyright>&copy; 2020 Citra Seattle</Copyright>
      <IconCredit>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>
        {' '}from{' '}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </IconCredit>
    </div>
  </Root>
);

export default Footer;
