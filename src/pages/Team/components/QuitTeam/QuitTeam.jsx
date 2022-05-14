import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../../../StoreProvider";

export const QuitTeam = ({ isLeader }) => {
  const { teamStore } = useStores();
  const navigate = useNavigate();

  const onDeleteTeam = () => {
    teamStore.deleteTeam();
    navigate("/");
  };

  return (
    <Button variant="contained" color="secondary" onClick={onDeleteTeam}>
      {isLeader ? "Убить команду" : "Покинуть команду"}
    </Button>
  );
};
