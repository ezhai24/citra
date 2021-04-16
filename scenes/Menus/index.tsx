import styled from '@emotion/styled';
import Head from 'next/head';

import { mq } from '~/shared/styles';

import menus from './config';
import Menu from './Menu';

const Root = styled.div({
  maxWidth: 725,
  margin: '0 auto',
  boxSizing: 'border-box',
  textAlign: 'center',
  [mq[0]]: {
    width: '90%',
  },
});

const Title = styled.h1({
  marginBottom: 32,
  fontFamily: 'Oswald, sans-serif',
});

const Menus = () => (
  <Root>
    <Head>
      <title>Menu - Citra | Bubble Tea Cafe - Seattle, Washington</title>
    </Head>
    <Title>MENU</Title>
    {menus.map(menu => <Menu {...menu} />)}
  </Root>
);

export default Menus;
