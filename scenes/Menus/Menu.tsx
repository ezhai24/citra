import styled from '@emotion/styled';

import { MenuType } from './config';
import MenuItemsByCategory from './MenuItemsByCategory';

const Root = styled.div({
  marginBottom: 128,
});

const Title = styled.h2({
  textTransform: 'uppercase',
  fontFamily: 'Oswald, sans-serif',
});

const Menu = ({ title, menuItemsByCategory }: MenuType) => (
  <Root>
    <Title>{title}</Title>
    {menuItemsByCategory.map(itemsByCategory =>
      <MenuItemsByCategory key={itemsByCategory.category} {...itemsByCategory} />
    )}
  </Root>
);

export default Menu;
