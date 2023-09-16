import { createContext, useState } from "react";

// This is the actual UserContext storage, where user state value is stored using useState hook.
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// This "UserContext.Provider" holds user values which is then provided to the child <App />, Initially user values are null, and when user sign-in react updates the state values, bcoz we are using useState hook to handle the user state value.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
