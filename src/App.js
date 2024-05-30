import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";
import Main from "./pages/Main";
import { PageLayout } from "./layout/Pagelayout";
import Logout from "./pages/Logout";
import { loginRequest } from "./authConfig";
import { useMsal } from "@azure/msal-react";

const App = ({ pca }) => {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <PageLayout>
        <Pages />
      </PageLayout>
    </MsalProvider>
  );
};

function Pages() {
  return (
    <Routes>
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
