import React from 'react';

import { Button } from 'antd';
import { IItem } from '../../model/base';
import { useAppStore } from '../../store';

interface IProps {
  record: IItem;
}

export const Complete = ({ record }: IProps) => {
  const { actions } = useAppStore();
  return (
    <a href="#complete" onClick={() => actions.compliteItem(record.key)}>
      <Button type="primary">Complete</Button>
    </a>
  );
};
