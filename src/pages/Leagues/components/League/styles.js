import styled from "styled-components";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  display: block;
  border-radius: 10px;
`;

export const HoverContainer = styled.div`
  div {
    transition: all ease-in-out 0.2s;
  }
  & > div:hover {
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  padding: 20px 30px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Name = styled(Typography)`
  font-weight: bold;
`;
