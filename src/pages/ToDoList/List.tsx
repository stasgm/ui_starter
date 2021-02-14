import React from 'react';
import styled from 'styled-components';

import { useAppStore } from '../../store';
import { FORM_COLUMNS } from './constants/FORM_COLUMNS';

import Page from '../../components/ui/Page';
import ItemList from './ItemList';
import { IListField } from './types';

const Item = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 200px;
  padding: 10px;
  text-align: center;
  border-bottom: rgba(0 0 0 / 5%) 3px solid;
  // position: sticky;
  top: 0;
`;

interface IProps {
  items: IListField[];
}

const ListHead = ({ items }: IProps) => {
  const listitems = items.map((el) => (
    <h1 key={el.name}>
      <strong>{el.name}</strong>
    </h1>
  ));
  return <Item>{listitems}</Item>;
};

const ListItem = () => {
  const { state } = useAppStore();
  return (
    <Page title="To Do List">
      <ListHead items={FORM_COLUMNS} />
      {state.items.map((item) => {
        return <ItemList item={item} key={item.key} />;
      })}
    </Page>
  );
};

export { ListItem };
