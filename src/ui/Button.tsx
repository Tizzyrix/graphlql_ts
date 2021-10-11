import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  color?: string;
  round?: boolean;
  outlined?: boolean;
  background?: string;
  bcolor?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<IButton>`
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.background || 'transparent'};
  padding: 5px 7px;

  ${(props) =>
    props.outlined &&
    css<IButton>`
      border: 1px solid ${(props) => props.bcolor || '#000'};
      background: transparent;
    `}

  ${(props) =>
    props.round &&
    css`
      border-radius: 20px;
    `}
`;

const Button: FC<IButton> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
