import { AppActions } from '../store';
import { IItem } from './base';

export interface IAppContextProps {
  state: IAppState;
  actions: typeof AppActions;
}

export interface IAuthState {
  userName: string;
}

export interface IAppState {
  items: IItem[];
}
