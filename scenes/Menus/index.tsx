import styled from '@emotion/styled';

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
    <Title>MENU</Title>
    {menus.map(menu => <Menu {...menu} />)}
  </Root>
);

export default Menus;
