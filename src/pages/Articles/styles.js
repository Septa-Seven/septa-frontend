import styled from "styled-components";
import { Typography } from "@mui/material";
import { COLORS } from "../../shared/colors";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const LinkContainer = styled(Typography)`
  a:hover {
    transition: all 0.2s ease-in-out;
    color: ${COLORS.lightBlack};
  }
`;

export const BlocksContainer = styled.div`
  margin-bottom: 18px;
`;

export const Article = styled.div`
  margin: 0 auto;
  padding: 10px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
