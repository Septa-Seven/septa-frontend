import { Typography } from "@mui/material";

export const List = ({ items, type }) => {
  const parsedItems = () => {
    return items.map((test, index) => (
      <li key={index}>
        <Typography>{test}</Typography>
      </li>
    ));
  };
  return (
    <>
      {type === "ordered" ? <ol>{parsedItems()}</ol> : <ul>{parsedItems()}</ul>}
    </>
  );
};
