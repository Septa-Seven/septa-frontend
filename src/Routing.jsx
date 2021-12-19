import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Leagues, News, Register } from "./pages";
import { WithHeader } from "./Layouts";
import { routes } from "./shared/constants/routes";

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
      </Routes>
    </BrowserRouter>
  );
};
