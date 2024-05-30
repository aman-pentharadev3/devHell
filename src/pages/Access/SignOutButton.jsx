import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <div>
      <button onClick={() => handleLogout()}>LogOut</button>
    </div>
  );
};
export default SignOutButton;
