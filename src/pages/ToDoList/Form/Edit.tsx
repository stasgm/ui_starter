import React from 'react';

import { Popconfirm } from 'antd';

import { useAppStore } from '../../../store';
import Button from '../../../components/ui/Button';

interface IProps {
  itemkey: string;
}

export const Edit = ({ itemkey }: IProps) => {
  const { actions } = useAppStore();
  return (
    <Popconfirm title="Are you sure you want to delete?" onConfirm={() => actions.deleteItem(itemkey)}>
      <Button variant="blue" style={{ margin: '5px' }}>
        <i className="fas fa-edit"></i>
      </Button>
    </Popconfirm>
  );
};
