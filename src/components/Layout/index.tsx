import React, { useState } from 'react';
import './index.scss';
import Header from './components/Header';
import Navbar from './components/NavBar/Navbar';

interface IState {
  collapsed: boolean;
}

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  const [state, setState] = useState<IState>({ collapsed: false });

  const toggle = () => {
    setState({ collapsed: !state.collapsed });
  };

  return (
    <div className="grid">
      <>
        <nav className="grid-nav">
          <Navbar visible={state.collapsed} close={toggle} />
        </nav>
        <header className="grid-header">
          <Header collapsed={state.collapsed} toggleMenu={toggle} />
        </header>
      </>
      <main className="grid-main">{children}</main>
    </div>
  );
};

export default AppLayout;
