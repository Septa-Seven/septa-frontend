import { getQueryParams } from "../../utils/getQueryParams";
import { CenteredVH } from "../../components";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../StoreProvider";
import { Navigate } from "react-router-dom";
import { routes } from "../../shared/routes";
import { Auth } from "../../services/Auth";

export const AuthWaiting = observer(({ endpoint }) => {
  const { authStore } = useStores();

  useEffect(() => {
    const code = getQueryParams(window.location.href, "code");
    Auth.deleteAccessToken();
    Auth.deleteRefreshToken();
    authStore.login(code, endpoint);
  }, [authStore, endpoint]);

  return (
    <CenteredVH>
      <CircularProgress />

      {authStore.accessToken && <Navigate to={routes.home} replace={true} />}
    </CenteredVH>
  );
});
