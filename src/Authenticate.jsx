import { useEffect, useState } from "react";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import { loginRequest } from "./authConfig";

const Authenticate = () => {
  const { instance } = useMsal();

  useEffect(() => {
    instance.loginRedirect(loginRequest);
  }, []);

  return <>Authenticate</>;
};

export default Authenticate;
