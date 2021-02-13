import { IItem } from '../../model';
import { createActionPayload, ActionsUnion } from '../utils';

export enum ActionAppTypes {
  ADD_TODO = 'ADD_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'COMPLETE_TODO',
}

export const AppActions = {
  addItem: createActionPayload<ActionAppTypes.ADD_TODO, IItem>(ActionAppTypes.ADD_TODO),
  deleteItem: createActionPayload<ActionAppTypes.DELETE_TODO, string>(ActionAppTypes.DELETE_TODO),
  compliteItem: createActionPayload<ActionAppTypes.COMPLETE_TODO, string>(ActionAppTypes.COMPLETE_TODO),
};

export type TAppActions = ActionsUnion<typeof AppActions>;
