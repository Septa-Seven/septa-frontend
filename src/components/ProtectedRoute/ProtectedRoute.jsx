import { useEffect } from "react";
import { useStores } from "../../StoreProvider";
import { useNavigate } from "react-router";
import { routes } from "../../shared/routes";

export const ProtectedRoute = ({ children }) => {
  const { authStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.accessToken) authStore.checkAuth(authStore.accessToken);
    else navigate(routes.login);
  }, [authStore, navigate]);

  return <>{children}</>;
};
