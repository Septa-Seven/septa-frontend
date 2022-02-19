import { Navbar } from "../../components";
import * as s from "./styles";

export const WithHeader = ({ component }) => (
  <>
    <Navbar />
    <s.Container>{component}</s.Container>
  </>
);
