import { Routing } from "./Routing";
import { useContext, useEffect } from "react";
import { storeContext } from "./StoreProvider";
import { Auth } from "./services/Auth";
import { observer } from "mobx-react-lite";
import { Toaster } from "react-hot-toast";

const AppView = () => {
  const { authStore, profileStore } = useContext(storeContext);

  useEffect(() => {
    const accessToken = Auth.getAccessToken();
    const userId = Auth.getUserId();
    if (accessToken && userId) {
      authStore.setAccessToken(accessToken);
      authStore.setUserId(userId);

      profileStore.getProfile(authStore.userId);
    }
  }, [authStore, authStore.userId, profileStore]);

  return (
    <>
      <Routing />
      <Toaster />
    </>
  );
};

export const App = observer(AppView);
