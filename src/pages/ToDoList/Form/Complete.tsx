import React from 'react';

import { useAppStore } from '../../../store';
import Button from '../../../components/ui/Button';

interface IProps {
  itemkey: string;
  completed: boolean;
}

export const Complete = ({ itemkey, completed }: IProps) => {
  const { actions } = useAppStore();
  return (
    <Button variant="orange" onClick={() => actions.compliteItem(itemkey)} style={{ margin: '5px' }}>
      <i className={completed ? 'far fa-check-square' : 'far fa-square'}></i>
    </Button>
  );
};
