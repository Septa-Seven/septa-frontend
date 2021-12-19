import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
