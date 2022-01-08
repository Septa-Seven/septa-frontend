import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthWaiting, Home, Leagues, News, Register } from "./pages";
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
          path={routes.news}
          element={<WithHeader component={<News />} />}
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
          path={routes.github}
          element={
            <WithHeader
              component={<AuthWaiting endpoint={apiUrls.githubAuth} />}
            />
          }
        />
        <Route
          path={routes.vk}
          element={
            <WithHeader component={<AuthWaiting endpoint={apiUrls.vkAuth} />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
