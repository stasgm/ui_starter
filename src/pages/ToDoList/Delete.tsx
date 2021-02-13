import React from 'react';

import { Popconfirm, Button } from 'antd';
import { IItem } from '../../model';
import { useAppStore } from '../../store';

interface IProps {
  record: IItem;
}

export const Delete = ({ record }: IProps) => {
  const { actions } = useAppStore();
  return (
    <Popconfirm title="Are you sure you want to delete?" onConfirm={() => actions.deleteItem(record.key)}>
      <Button type="primary" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};
