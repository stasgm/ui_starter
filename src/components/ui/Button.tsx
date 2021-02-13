import styled, { css } from 'styled-components';
import React from 'react';
import Loading from './Loading';

interface IProps {
  loading?: boolean;
  variant?: string;
  outline?: boolean;
  children: React.ReactNode;
}

const ButtonStyled = styled.button<IProps>`
  border: 1px solid var(--color-border);
  background-color: var(--color-${(p) => p.variant || 'light'});
  color: var(--color-${(p) => p.variant || 'light'}-contrast);
  height: var(--height-button);
  width: auto;
  min-width: var(--min-width-button);
  padding: 0 var(--px-button);
  font-weight: bold;
  border-radius: var(--border-radius);
  font-size: var(--fsize-3);
  cursor: pointer;
  &:hover {
    background-color: var(--color-${(p) => p.variant || 'light'}-hover);
    border-color: var(--color-border-hover);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }
  :active {
    box-shadow: none;
  }
  ${(props) =>
    props.outline &&
    css<IProps>`
      border-color: var(--color-${(p) => p.variant || 'gray'});
      background-color: transparent;
      color: var(--color-${(p) => p.variant || 'gray'});
      &:hover {
        background-color: var(--color-${(p) => p.variant || 'gray'});
        color: var(--color-${(p) => p.variant || 'gray'}-contrast);
      }
    `}
`;

const Button = ({ loading, ...rest }: IProps) => {
  return (
    <ButtonStyled disabled={loading} {...rest}>
      {loading ? <Loading /> : rest.children}
    </ButtonStyled>
  );
};

export default Button;
