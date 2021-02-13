/* eslint-disable react/display-name */
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { MenuFoldOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

interface ISiderProps extends RouteComponentProps {
  collapsed?: boolean;
}

interface IMenuItem {
  key: string;
  title: string;
  path?: string;
  children?: IMenuItem[];
  icon?: React.ReactNode;
}

const MenuList: IMenuItem[] = [
  {
    key: '1',
    title: 'Home',
    path: '/',
  },
  {
    key: '2',
    title: 'Charts',
    path: '/home/charts',
  },
  {
    key: '3',
    title: 'Log',
    children: [
      {
        key: '3-0',
        title: 'API',
        path: '/home/log-api',
        icon: 'meh',
      },
      {
        key: '3-1',
        title: 'Errors',
        path: '/home/log-errors',
      },
    ],
  },
  {
    key: '4',
    title: 'Essay',
    icon: 'book',
    children: [
      {
        key: '4-0',
        title: 'Что-то там',
        path: '/home/blog-article',
      },
    ],
  },
];

const SiderComponent = (props: ISiderProps) => {
  const { collapsed } = props;

  const menuItem = (m: IMenuItem) => {
    if (m.children) {
      const subItems = (
        <SubMenu key={m.key} icon={<MenuFoldOutlined />} title={m.title}>
          {m.children.map(menuItem)}
        </SubMenu>
      );
      return subItems;
    }

    const item = (
      <Item key={m.key} title={m.title} icon={<UserOutlined />}>
        {m.title}
      </Item>
    );
    return item;
  };

  return (
    <Sider width="260" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <div>Hello!</div>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {MenuList.map(menuItem)}
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderComponent);
