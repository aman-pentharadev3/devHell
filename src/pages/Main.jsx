import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import SignInButton from "./Access/SignInButton";
import SignOutButton from "./Access/SignOutButton";
import { Link as RouterLink } from "react-router-dom";

const Main = () => {
  const { inProgress } = useMsal();

  return (
    <>
      <AuthenticatedTemplate>
        Hey You are Authenticated. <p>Click below if you want to logOut.</p>
        <SignOutButton />
        <br />
        <p>Open App in New Window</p>
        <button
          onClick={() => {
            const newWindow = window.open(
              "http://localhost:3000",
              "_blank",
              `width=${screen.width},height=${screen.height}`
            );

            if (newWindow) newWindow.focus();
          }}
        >
          Profile
        </button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p variant="h6">
          <center>Please sign-in to see your profile information.</center>
        </p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  );
};

export default Main;
