/* eslint-disable react/display-name */
import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Complete } from '../../pages/ToDoList/Complete';
import { Delete } from '../../pages/ToDoList/Delete';
import { Title } from '../../pages/ToDoList/Title';
import { IItem } from '../../model';

export const FORM_COLUMNS: ColumnsType<IItem> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    filters: [
      {
        text: 'Hide Completed',
        value: 'hide',
      },
    ],
    onFilter: (value: string | number | boolean, record: IItem) => record.completed === 'false',
    render: (text: string, record: IItem) => {
      return <Title record={record}>{text}</Title>;
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text: string, record: IItem) => <Title record={record}>{text}</Title>,
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (_: string, record: IItem) => {
      return (
        <>
          <Complete record={record} />
          <Delete record={record} />
        </>
      );
    },
  },
];
