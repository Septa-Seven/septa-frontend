import { Typography } from "@mui/material";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((test, index) => (
        <Typography key={index}>{test}</Typography>
      ))}
    </ul>
  );
};
