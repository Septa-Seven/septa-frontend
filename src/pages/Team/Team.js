import { useContext, useEffect } from "react";
import { storeContext } from "../../StoreProvider";
import { useParams } from "react-router";
import { Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

const TeamView = () => {
  const { teamStore } = useContext(storeContext);
  console.log(teamStore);
  const params = useParams();

  useEffect(() => {
    teamStore.getTeam(params.id);
  }, [params.id, teamStore]);

  return (
    <Container>
      <Typography variant="h4">{teamStore.name}</Typography>
      <Typography variant="h4">{teamStore.description}</Typography>
      <Typography variant="h4">
        {" "}
        id лидера пидарасов - {teamStore.leader}
      </Typography>
      {teamStore.users.map(({ id, username }) => (
        <Typography key={id} variant="body">
          {username}
        </Typography>
      ))}
    </Container>
  );
};

export const Team = observer(TeamView);
