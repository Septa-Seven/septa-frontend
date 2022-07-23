import { Typography } from "@mui/material";

export const List = ({ items }) => {
  return (
    <ul>
      {items.map((test, index) => (
        <li key={index}><Typography >{test}</Typography></li>
      ))}
    </ul>
  );
};
