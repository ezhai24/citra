import { ClassNames } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactChild } from 'react';

import { Colors } from '~/shared/styles';

const Root = styled.button(({ filled, primary }: any) => ({
  borderStyle: 'solid',
  borderColor: primary ? Colors.BRAND.DARK : Colors.NEUTRALS.BLACK,
  padding: 10,
  backgroundColor: filled
    ? (primary ? Colors.BRAND.DARK : Colors.NEUTRALS.BLACK)
    : Colors.NEUTRALS.WHITE,
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

const Button = ({ primary, filled, onClick, className, children }: Props) => {
  return (
    <Root
      primary={primary}
      filled={filled}
      onClick={onClick}
      className={className}
    >
      {children}
    </Root>
  );
};

export default Button;
