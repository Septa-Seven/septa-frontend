import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = () => {
  return <div>mem</div>;
};

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
