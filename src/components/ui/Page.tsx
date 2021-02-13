import styled from 'styled-components';
import React from 'react';
import Divider from './Divider';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

const Header = styled.div`
  min-height: 38px;
  padding: 0 24px;
`;

const Content = styled.div`
  padding: 0 24px;
`;

const Page = ({ title, children, ...rest }: IProps) => {
  return (
    <div {...rest}>
      <Header>
        <h1>{title}</h1>
        <Divider />
      </Header>
      <Content>{children}</Content>
    </div>
  );
};

export default Page;
