import { Reducer } from 'react';

import { IAppState } from '../../model';
import { FORM_INITIAL_STATE } from '../../pages/ToDoList/constants/INITIAL_STATE';
import { TAppActions, ActionAppTypes } from './actions';

export const initialState: IAppState = {
  items: FORM_INITIAL_STATE,
};

export const reducer: Reducer<IAppState, TAppActions> = (state = initialState, action): IAppState => {
  console.log(action);
  switch (action.type) {
    case ActionAppTypes.ADD_TODO:
      return { ...state, items: [...state.items, action.payload] };
    case ActionAppTypes.EDIT_TODO:
      return { ...state, items: state.items.map((i) => (i.key === action.payload.key ? action.payload : i)) };
    case ActionAppTypes.COMPLETE_TODO:
      return {
        ...state,
        items: state.items.map((item) => {
          return item.key == action.payload ? { ...item, completed: !item.completed } : item;
        }),
      };
    case ActionAppTypes.DELETE_TODO:
      return { ...state, items: state.items.filter((item) => item.key !== action.payload) };
    default:
      return state;
  }
};
