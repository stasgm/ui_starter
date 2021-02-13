import React, { createContext, useContext } from 'react';
import { IAppContextProps, IAppState } from '../../model';
import { useTypesafeActions } from '../utils';
import { AppActions } from './actions';
import { reducer, initialState } from './reducer';

const defaultAppState: IAppContextProps = {
  state: initialState,
  actions: AppActions,
};

interface StoreProviderProps {
  children: React.ReactNode;
}

const createStoreContext = () => {
  const StoreContext = createContext<IAppContextProps>(defaultAppState);

  const StoreProvider = ({ children }: StoreProviderProps) => {
    const [state, actions] = useTypesafeActions<IAppState, typeof AppActions>(reducer, initialState, AppActions);

    return <StoreContext.Provider value={{ state, actions }}>{children}</StoreContext.Provider>;
  };

  const useStore = () => useContext(StoreContext);

  return { StoreProvider, useStore };
};

export const { StoreProvider, useStore } = createStoreContext();
