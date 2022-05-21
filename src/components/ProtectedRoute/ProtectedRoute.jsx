import { useEffect } from "react";
import { useStores } from "../../StoreProvider";
import { routes } from "../../shared/routes";
import { useNavigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { authStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStore.accessToken) navigate(routes.login);
    else authStore.checkAuth(authStore.accessToken);
  }, [authStore, navigate]);

  return <>{children}</>;
};
