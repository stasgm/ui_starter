import { v1 as uuid } from 'uuid';
import { IItem } from '../../model';

export const FORM_INITIAL_STATE: IItem[] = [
  {
    key: uuid(),
    title: 'Use Hooks in a React application (Default TODO from INITIAL_STATE.js)',
    date: new Date().toISOString().slice(0, 10),
    completed: 'false',
    dataIndex: 0,
  },
];
