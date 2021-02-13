import styled from '@emotion/styled';

import { mq } from '~/shared/styles';

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
  marginBottom: 0,
  fontFamily: 'Fraunces, serif',
});

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

const AdditionItem = ({
  name,
  price,
  flavors,
  modifiers,
  modifierOrientation,
}: MenuItemType) => (
  <Root>
    <Title>{name}</Title>
    {flavors && <p>{flavors}</p>}
    {modifiers &&
      <Modifiers modifierOrientation={modifierOrientation}>
        {modifiers.map(modifier => <Modifier {...modifier} />)}
      </Modifiers>
    }
    <p>{price && `$${price.toFixed(2)}`}</p>
  </Root>
);

export default AdditionItem;
