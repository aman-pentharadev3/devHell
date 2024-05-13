import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

export function Home() {
  return (
    <>
      <AuthenticatedTemplate>
        <Button
          component={RouterLink}
          to="/profile"
          variant="contained"
          color="primary"
        >
          Request Profile Information
        </Button>
        <Button
          component={RouterLink}
          to="/profileUseMsalAuthenticationHook"
          variant="contained"
          color="primary"
        >
          Request Access Token (using useMsalAuthentication hook)
        </Button>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <p variant="h6">
          <center>Please sign-in to see your profile information.</center>
        </p>
      </UnauthenticatedTemplate>
    </>
  );
}
