import { Reducer } from 'react';

import { IAppState } from '../../model';
import { FORM_INITIAL_STATE } from '../../utils/constants/INITIAL_STATE';
import { openNotification } from '../../utils/functions/openNotification';
import { TAppActions, ActionAppTypes } from './actions';

export const initialState: IAppState = {
  items: FORM_INITIAL_STATE,
};

export const reducer: Reducer<IAppState, TAppActions> = (state = initialState, action): IAppState => {
  switch (action.type) {
    case ActionAppTypes.ADD_TODO:
      openNotification('bottomLeft', 'TODO added');
      return { ...state, items: [...state.items, action.payload] };
    // state.push({ title, date, key: uuidv4(), completed: 'false' });
    /*     case ActionAppTypes.COMPLETE_TODO:
      openNotification('bottomLeft', 'TODO completed');
      const todoToComplete = state.filter((todo) => todo.key === action.payload)[0];
      if (todoToComplete) {
        todoToComplete.completed = 'true';
      }
      break;
    case ActionAppTypes.DELETE_TODO:
      openNotification('bottomLeft', 'TODO deleted');
      return {...state, items: state.items.filter((item) => item.key !== action.payload); */
    default:
      openNotification('bottomLeft', 'An error has occured!');
      return state;
  }
};
