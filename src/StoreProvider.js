import { createContext } from "react";
import { AuthStore } from "./stores/AuthStore";
import { UserProfile } from "./stores/UserProfile";

export const storeContext = createContext();

const stores = {
  authStore: new AuthStore(),
  profileStore: new UserProfile(),
};

export const StoreProvider = ({ children }) => (
  <storeContext.Provider value={stores}>{children}</storeContext.Provider>
);
