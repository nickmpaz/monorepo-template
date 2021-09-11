import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";
import { selectAuthenticated } from "../store/authSlice";
import { LOGIN } from "../../app/definitions/routes";

export const GuardedRoute: FC<React.ComponentProps<typeof Route>> = ({
  children,
  ...rest
}) => {
  const authenticated = useAppSelector(selectAuthenticated);
  const redirectUrl = LOGIN;
  return (
    <Route
      {...rest}
      render={() => {
        return authenticated ? children : <Redirect to={redirectUrl} />;
      }}
    />
  );
};
