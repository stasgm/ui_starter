import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { IItem } from '../../model';

const Item = styled.div`
  display: grid;
  grid-template-columns: 70% repeat(3, 1fr);
  padding: 10px;
  border-bottom: rgba(0 0 0 / 5%) 1px solid;
`;

interface IProps {
  key: string;
  item: IItem;
}

function ListItem({ item }: IProps) {
  return (
    <Item>
      <h4>
        <Link to={`/todolist/${item.key}`}>{item.title}</Link>
      </h4>
      <span>
        <strong>Status: </strong> {item.completed ? 'выполнен' : 'не выполнен'}
      </span>{' '}
      <span>
        <strong>Date: </strong> {item.date}
      </span>
    </Item>
  );
}

export default ListItem;
