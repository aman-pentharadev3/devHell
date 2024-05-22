import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";

const App = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <p>Anyone can see this paragraph.</p>
      {isAuthenticated && <p>At least one account is signed in!</p>}
      {!isAuthenticated && <p>No users are signed in!</p>}
    </>
  );
};

export default App;
