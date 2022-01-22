import { getQueryParams } from "../../utils/getQueryParams";
import { CenteredVH } from "../../components";
import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../../storeContext";
import { Navigate } from "react-router-dom";
import { routes } from "../../shared/routes";

export const AuthWaiting = observer(({ endpoint }) => {
  const authStore = useContext(StoreContext);

  useEffect(() => {
    const code = getQueryParams(window.location.href, "code");
    authStore.login(code, endpoint);
  }, [authStore, endpoint]);

  return (
    <CenteredVH>
      <CircularProgress />

      {authStore.authenticated && <Navigate to={routes.home} />}
    </CenteredVH>
  );
});
