import { Typography } from "@mui/material";

export const Paragraph = ({ text }) => {
  return (
    <Typography marginBottom={2} dangerouslySetInnerHTML={{ __html: text }} />
  );
};
