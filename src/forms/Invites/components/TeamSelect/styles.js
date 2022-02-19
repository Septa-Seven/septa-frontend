import styled from "styled-components";
import { theme } from "../../../../theme";

export const Container = styled.div`
  padding: 5px 0;

  background: ${(props) =>
    props.active ? theme.palette.secondary.main : "transparent"};
  color: ${(props) => (props.active ? "white" : "black")};

  p {
    font-weight: bold;
  }

  :hover {
    background: ${theme.palette.secondary.main};
    color: white;
    cursor: pointer;
  }
`;
