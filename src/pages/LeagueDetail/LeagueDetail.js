import { useEffect } from "react";
import { useStores } from "../../StoreProvider";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { Typography } from "@mui/material";

const LeagueDetailView = () => {
  const { leaguesStore } = useStores();
  const { id } = useParams();
  useEffect(() => {
    leaguesStore.getLeague(id);
    leaguesStore.getGames(id);
  }, [id, leaguesStore]);

  return (
    <div>
      <Typography>
        <a href={leaguesStore.connectUrl}>Конектись бро</a>
      </Typography>
    </div>
  );
};

export const LeagueDetail = observer(LeagueDetailView);
