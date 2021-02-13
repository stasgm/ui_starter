import * as React from 'react';
import { Layout } from 'antd';

const { Footer: AFooter } = Layout;

const Footer = () => (
  <AFooter
    style={{
      background: '#fff',
      textAlign: 'center',
    }}
  >
    Copyright by xpioneer
  </AFooter>
);

export default Footer;
