import { Navbar } from "../../components/Navbar/Navbar";

export const WithHeader = ({ component }) => (
  <>
    <Navbar />
    {component}
  </>
);
