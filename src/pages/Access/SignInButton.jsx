import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};
export default SignInButton;
