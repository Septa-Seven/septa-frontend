import { Typography } from "@mui/material";

const parsedLevels = new Map([
  [0, "h2"],
  [1, "h3"],
  [2, "h4"],
  [3, "h5"],
  [4, "h6"],
]);

export const Title = ({ title, level }) => {
  return (
    <Typography variant={parsedLevels.get(level)} marginBottom={3}>
      {title}
    </Typography>
  );
};
