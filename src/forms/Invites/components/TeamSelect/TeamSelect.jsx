import { Typography } from "@mui/material";
import * as s from "./styles";

export const TeamSelect = ({ id, name, active, onClick }) => {
  return (
    <s.Container active={active} onClick={() => onClick(id)}>
      <Typography>{name}</Typography>
    </s.Container>
  );
};
