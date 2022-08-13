import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  AuthWaiting,
  NoTeam,
  Leagues,
  Articles,
  Register,
  Team,
  LeagueDetail,
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
          element={<WithHeader component={<Articles />} />}
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
          path={routes.leagueDetail}
          element={<WithHeader component={<LeagueDetail />} />}
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
          element={<WithHeader component={<NoTeam />} />}
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

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};
