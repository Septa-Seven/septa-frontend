import { Typography } from "@mui/material";

export const Paragraph = ({ text }) => {
  return <Typography dangerouslySetInnerHTML={{ __html: text }} />;
};
