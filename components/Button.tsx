import styled from '@emotion/styled';
import React, { ReactChild } from 'react';

import { Colors } from '~/shared/styles';

const Root = styled.button(({ filled, primary }: any) => ({
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: primary ? Colors.BRAND.DARK : Colors.NEUTRALS.BLACK,
  padding: 10,
  backgroundColor: filled
    ? (primary ? Colors.BRAND.DARK : Colors.NEUTRALS.BLACK)
    : 'transparent',
  color: filled
    ? Colors.NEUTRALS.WHITE
    : (primary ? Colors.BRAND.DARK : Colors.NEUTRALS.BLACK),
  ':hover': {
    cursor: 'pointer',
  },
}));

interface Props {
  primary?: boolean;
  filled?: boolean;
  onClick?: () => void;
  children: ReactChild | ReactChild[];
  className?: string;
}

const Button = React.forwardRef(({ primary, filled, onClick, className, children }: Props, ref) => {
  return (
    <Root
      ref={ref}
      primary={primary}
      filled={filled}
      onClick={onClick}
      className={className}
    >
      {children}
    </Root>
  );
});

export default Button;
