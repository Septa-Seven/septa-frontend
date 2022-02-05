import { createContext } from "react";
import { AuthStore } from "./stores/AuthStore";
import { UserProfile } from "./stores/UserProfile";
import { TeamStore } from "./stores/TeamStore";

export const storeContext = createContext();

const stores = {
  authStore: new AuthStore(),
  profileStore: new UserProfile(),
  teamStore: new TeamStore(),
};

export const StoreProvider = ({ children }) => (
  <storeContext.Provider value={stores}>{children}</storeContext.Provider>
);
