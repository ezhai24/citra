import styled from '@emotion/styled';

import { ModifierType } from './config';

const Root = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: '4px 8px',
  '>p': {
    margin: '0 4px',
  },
});

const Modifier = ({
  name,
  price,
}: ModifierType) => (
  <Root>
    <p>{name} - ${price.toFixed(2)}</p>
  </Root>
);

export default Modifier;
