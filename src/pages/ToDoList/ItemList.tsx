import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { IItem } from './types';
import { Complete } from './Form/Complete';
import { Delete } from './Form/Delete';
// import { Edit } from './Form/Edit';

const Item = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 200px;
  padding: var(--grid-lines);
  border-bottom: rgba(0 0 0 / 5%) 1px solid;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

interface IProps {
  key: string;
  item: IItem;
}

function ItemList({ item }: IProps) {
  return (
    <Item key={item.key}>
      <h4>
        <Link to={`/todolist/${item.key}`}>{item.title}</Link>
      </h4>
      <span style={{ textAlign: 'center' }}>{item.date}</span>
      <Buttons>
        <Complete itemkey={item.key} completed={item.completed} />
        <Delete itemkey={item.key} />
        {/* <Edit itemkey={item.key} /> */}
      </Buttons>
    </Item>
  );
}

export default ItemList;
