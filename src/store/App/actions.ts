import { IItem } from '../../pages/ToDoList/types';
import { createActionPayload, ActionsUnion } from '../utils';

export enum ActionAppTypes {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
}

export const AppActions = {
  addItem: createActionPayload<ActionAppTypes.ADD_TODO, IItem>(ActionAppTypes.ADD_TODO),
  deleteItem: createActionPayload<ActionAppTypes.DELETE_TODO, string>(ActionAppTypes.DELETE_TODO),
  editItem: createActionPayload<ActionAppTypes.EDIT_TODO, IItem>(ActionAppTypes.EDIT_TODO),
  compliteItem: createActionPayload<ActionAppTypes.COMPLETE_TODO, string>(ActionAppTypes.COMPLETE_TODO),
};

export type TAppActions = ActionsUnion<typeof AppActions>;
