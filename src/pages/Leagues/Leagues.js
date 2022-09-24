import { useStores } from "../../StoreProvider";
import { useEffect } from "react";
import { League } from "./components";
import { observer } from "mobx-react-lite";
import * as s from "./styles";

const LeaguesView = () => {
  const { leaguesStore } = useStores();
  useEffect(() => {
    leaguesStore.getLeagues();
  }, [leaguesStore]);

  return (
    <s.Container>
      {leaguesStore.leagues.length > 0 &&
        leaguesStore.leagues.map((league) => (
          <League key={league.id} league={league} />
        ))}
    </s.Container>
  );
};

export const Leagues = observer(LeaguesView);
