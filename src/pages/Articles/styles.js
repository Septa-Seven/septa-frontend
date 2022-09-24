import styled from "styled-components";
import { Typography } from "@mui/material";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Link = styled(Typography)`
  a:hover {
    text-decoration: underline;
  }
`;

export const Article = styled.div`
  margin: 0 auto 20px auto;
  padding: 10px;
`;
