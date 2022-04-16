import * as s from "./styles";
import { IconButton, Typography } from "@mui/material";

export const Item = ({ icon, children, onClick, id }) => {
  return (
    <s.Container>
      <Typography>{children}</Typography>
      <IconButton onClick={() => onClick && onClick(id)}>
        {icon && icon}
      </IconButton>
    </s.Container>
  );
};
