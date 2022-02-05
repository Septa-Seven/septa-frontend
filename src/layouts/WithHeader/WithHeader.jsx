import { Navbar } from "../../components";

export const WithHeader = ({ component }) => (
  <>
    <Navbar />
    {component}
  </>
);
