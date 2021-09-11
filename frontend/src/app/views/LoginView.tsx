import React from "react";
import { LoginButton } from "../../auth/components/LoginButton";
import { LogoutButton } from "../../auth/components/LogoutButton";

export const LoginView = () => {
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </>
  );
};
