import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

import { StoreContext } from "./storeContext";
import { AuthStore } from "./stores/authStore";

const authStore = new AuthStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={authStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
