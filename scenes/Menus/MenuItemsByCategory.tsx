import styled from '@emotion/styled';

import { MenuItemsByCategoryType } from './config';
import AdditionItem from './AdditionItem';
import MenuItem from './MenuItem';

const Root = styled.div({
  marginBottom: 64,
});

const Title = styled.h3({
  textTransform: 'uppercase',
  fontFamily: 'Oswald, sans-serif',
});

const Items = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Additions = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const MenuItemsByCategory = ({ category, items, additions }: MenuItemsByCategoryType) => (
  <Root>
    <Title>{category}</Title>
    <Items>
      {items.map(item => <MenuItem {...item} />)}
    </Items>
    {additions &&
      <Additions>
        {additions.map(addition => <AdditionItem {...addition} />)}
      </Additions>
    }
  </Root>
);

export default MenuItemsByCategory;
