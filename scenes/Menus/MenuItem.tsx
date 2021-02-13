import styled from '@emotion/styled';

import { Colors, mq } from '~/shared/styles';

import { MenuItemType, ModifierOrientation } from './config';
import Modifier from './Modifier';

const Root = styled.div({
  flexBasis: '50%',
  maxWidth: 600,
  marginBottom: 16,
  padding: '0 32px',
  boxSizing: 'border-box',
  [mq[0]]: {
    flexBasis: '100%',
  },
});

const Title = styled.h4({
  marginBottom: 8,
  fontFamily: 'Fraunces, serif',
});

const Flavors = styled.p({
  color: Colors.NEUTRALS.DARKGRAY,
  fontStyle: 'italic',
})

const Modifiers = styled.div(({
  modifierOrientation,
}: {
  modifierOrientation: ModifierOrientation;
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: modifierOrientation === ModifierOrientation.COLUMN ? 'column' : 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const MenutItem = ({
  name,
  price,
  description,
  flavors,
  modifiers,
  modifierOrientation,
}: MenuItemType) => (
  <Root>
    <Title>{name}</Title>
    {description && <p>{description}</p>}
    {flavors && <Flavors>{flavors}</Flavors>}
    {modifiers &&
      <Modifiers modifierOrientation={modifierOrientation}>
        {modifiers.map(modifier => <Modifier {...modifier} />)}
      </Modifiers>
    }
    {price && <p>${price.toFixed(2)}</p>}
  </Root>
);

export default MenutItem;
