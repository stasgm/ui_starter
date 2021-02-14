import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { breakpoints } from './NavBar/Navbar';

interface IHeaderProps {
  collapsed: boolean;
  toggleMenu: () => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  height: 48px;
  align-items: stretch;
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
  }
  button {
    white-space: nowrap;
  }
  &:first-child {
    font-size: var(--fsize-6);
    i {
      display: none;
      @media (max-width: ${breakpoints.desktop}) {
        display: inline;
      }
    }
  }
`;

const HeaderComponent = ({ toggleMenu }: IHeaderProps) => {
  return (
    <Grid>
      <div onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="mid"></div>
      <div>
        <Button>Sign Out</Button>
      </div>
    </Grid>
  );
};

export default HeaderComponent;
