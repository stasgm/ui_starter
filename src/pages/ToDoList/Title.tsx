import React from 'react';
import { IItem } from '../../model/base';

interface IProps {
  record: IItem;
  children: React.ReactNode;
}

export const Title = ({ children, record }: IProps) => {
  return (
    <h4 style={{ textAlign: 'left' }} className={record.completed === 'true' ? 'true' : 'false'}>
      {children}
    </h4>
  );
};
