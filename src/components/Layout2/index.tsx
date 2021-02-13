import React, { useState } from 'react';
// import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sider from './components/sider';

const { Header, Content } = Layout;

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
    <div className="main">
      <Sider collapsed={state.collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default AppLayout;
