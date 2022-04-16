import styled from "styled-components";
import { theme } from "../../../../theme";

export const Container = styled.div`
  padding: 5px 10px;
  text-align: left;
  border-bottom: 1px solid ${theme.palette.primary.main};

  background: ${(props) =>
    props.active ? theme.palette.primary.main : "transparent"};
  color: ${(props) => (props.active ? "white" : "black")};

  :hover {
    background: ${theme.palette.primary.main};
    color: white;
    cursor: pointer;
  }
`;
