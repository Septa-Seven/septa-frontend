import styled from "styled-components";
import { Box } from "@mui/material";

export const Container = styled.div`
  margin-bottom: 30px;

  a {
    color: #fff;
  }
`;

export const MenuContainer = styled(Box)`
  display: flex;
  gap: 25px;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;
