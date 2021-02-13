import React from 'react';
import { Route as ReactDOMRoute, RouteProps as ReactDOMRouteProps, Redirect } from 'react-router-dom';
// import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: RouteProps) => {
  // const { user } = useAuth();
  const user = null;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user) {
          return <Component />;
        }
        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/signin',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
