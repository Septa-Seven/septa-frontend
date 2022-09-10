import { Typography } from "@mui/material";
import * as s from "./styles";

export const List = ({ items, type }) => {
  const parsedItems = () => {
    return items.map((text, index) => (
      <s.ListItem key={index}>
        <Typography dangerouslySetInnerHTML={{ __html: text }}></Typography>
      </s.ListItem>
    ));
  };
  return (
    <>
      {type === "ordered" ? (
        <s.OrderedList>{parsedItems()}</s.OrderedList>
      ) : (
        <s.UnOrderedList>{parsedItems()}</s.UnOrderedList>
      )}
    </>
  );
};
