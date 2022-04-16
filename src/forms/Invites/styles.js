import styled from "styled-components";
import { theme } from "../../theme";

export const TeamContainer = styled.div`
  margin-top: 20px;
  background: ${theme.palette.primary.main};
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  border-radius: 3px;

  div {
    color: white;
  }

  div:last-child {
    border-bottom: none;
  }
`;
