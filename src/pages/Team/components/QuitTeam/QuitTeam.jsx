import { Button } from "@mui/material";

export const QuitTeam = ({ isLeader }) => {
  return (
    <Button variant="contained" color="secondary">
      {isLeader ? "Убить команду" : "Покинуть команду"}
    </Button>
  );
};
