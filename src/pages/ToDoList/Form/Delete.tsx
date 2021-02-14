import React from 'react';

import { useAppStore } from '../../../store';
import Button from '../../../components/ui/Button';

interface IProps {
  itemkey: string;
}

export const Delete = ({ itemkey }: IProps) => {
  const { actions } = useAppStore();

  const handleDelete = () => {
    confirm('Удалить?') && actions.deleteItem(itemkey);
  };

  return (
    <Button variant="red" style={{ margin: '5px' }} onClick={handleDelete}>
      <i className="fas fa-trash-alt"></i>
    </Button>
  );
};
