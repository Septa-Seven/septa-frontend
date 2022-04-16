import React, { createContext } from "react";
import { RootStore } from "./stores/RootStore";

export const storeContext = createContext();

export const StoreProvider = ({ children }) => (
  <storeContext.Provider value={new RootStore()}>
    {children}
  </storeContext.Provider>
);

export const useStores = () => React.useContext(storeContext);
