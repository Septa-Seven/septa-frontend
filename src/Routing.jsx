import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AuthWaiting,
  CreateTeamForm,
  Home,
  Leagues,
  Articles,
  Register,
  Team,
} from "./pages";
import { WithHeader } from "./layouts";
import { routes } from "./shared/routes";
import { apiUrls } from "./shared/apiUrls";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.home}
          exact
          element={<WithHeader component={<Home />} />}
        />

        <Route
          path={routes.login}
          element={<WithHeader component={<Register />} />}
        />

        <Route
          path={routes.leagues}
          element={<WithHeader component={<Leagues />} />}
        />

        <Route
          path={routes.articles}
          element={<WithHeader component={<Articles />} />}
        />

        <Route
          path={routes.team}
          element={<WithHeader component={<Team />} />}
        />

        <Route
          path={routes.createTeam}
          element={<WithHeader component={<CreateTeamForm />} />}
        />

        <Route
          path={routes.google}
          element={
            <WithHeader
              component={<AuthWaiting endpoint={apiUrls.googleAuth} />}
            />
          }
        />

        <Route
          path={routes.vk}
          element={
            <WithHeader component={<AuthWaiting endpoint={apiUrls.vkAuth} />} />
          }
        />

        <Route
          path={routes.github}
          element={
            <WithHeader
              component={<AuthWaiting endpoint={apiUrls.githubAuth} />}
            />
          }
        />

        <Route
          path={routes.yandex}
          element={
            <WithHeader
              component={<AuthWaiting endpoint={apiUrls.yandexAuth} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
