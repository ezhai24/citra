import styled from '@emotion/styled';

import { Colors, mq } from '~/shared/styles';
import routes from '~/shared/routes';

const Root = styled.div({
  margin: '32px 0 64px',
});

const LocationHours = styled.div({
  display: 'flex',
  width: '90%',
  margin: '0 auto',
  [mq[0]]: {
    flexDirection: 'column',
  },
  '& a': {
    color: Colors.BRAND.DARK,
    textDecoration: 'none',
  },
  '& a:hover': {
    textDecoration: 'underline',
  }
});

const Section = styled.div({
  flex: 1,
  margin: '16px 0',
  textAlign: 'center',
});

const SectionTitle = styled.h3({
  fontFamily: 'Oswald, sans-serif',
});

const CovidUpdate = styled.div({
  marginTop: 64,
  textAlign: 'center',
  fontFamily: 'Fraunces, serif',
});

const LocationAndHours = () => (
  <Root>
    <CovidUpdate>
      <h3>COVID UPDATE</h3>
      <p>We are open for take-out, delivery, and dine-in!</p>
    </CovidUpdate>
    <LocationHours>
      <Section>
        <SectionTitle>LOCATION</SectionTitle>
        <p>4730 University Way NE #105</p>
        <p>Seattle WA, 98105</p>
        <a href={routes.directions}>Get Directions</a>
      </Section>
      <Section>
        <SectionTitle>HOURS</SectionTitle>
        <p>Mon - Sun: 1pm - 11pm</p>
      </Section>
      <Section>
        <SectionTitle>PHONE</SectionTitle>
        <a href={routes.phone}>(206) 327-9012</a>
      </Section>
      <Section>
        <SectionTitle>EMAIL</SectionTitle>
        <a href={routes.email}>citra4730@gmail.com</a>
      </Section>
    </LocationHours>
  </Root>
);

export default LocationAndHours;
