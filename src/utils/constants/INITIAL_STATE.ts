import { IItem } from '../../model';

export const FORM_INITIAL_STATE: IItem[] = [
  {
    key: '123',
    title: 'Use Hooks in a React application (Default TODO from INITIAL_STATE.js)',
    date: new Date().toISOString().slice(0, 10),
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: '12333',
    title: 'Сменить вывод звук',
    date: new Date().toISOString().slice(0, 10),
    completed: 'true',
    dataIndex: 2,
  },
  {
    key: '12223',
    title: 'Закончить уборку',
    date: new Date('2021-01-01').toISOString().slice(0, 10),
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: '12333',
    title: 'Сделать задачи помобильному',
    date: new Date().toISOString().slice(0, 10),
    completed: 'true',
    dataIndex: 4,
  },
  {
    key: '12223',
    title: 'Помыться',
    date: new Date().toISOString().slice(0, 10),
    completed: 'false',
    dataIndex: 11,
  },
  {
    key: '1233111',
    title: 'Приготовить обед',
    date: new Date().toISOString().slice(0, 10),
    completed: 'true',
    dataIndex: 222,
  },
  {
    key: '11123',
    title: 'Покормить Нокса',
    date: new Date().toISOString().slice(0, 10),
    completed: 'false',
    dataIndex: 0,
  },
  {
    key: '1233311',
    title: 'Посмотреть фильл очень и очень интересный',
    date: new Date().toISOString().slice(0, 10),
    completed: 'true',
    dataIndex: 2,
  },
];
