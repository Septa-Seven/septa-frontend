import { Button } from "@mui/material";
import * as s from "./styles";
import { teams } from "./mock";
import { TeamSelect } from "./components";
import { useState } from "react";

export const Invites = () => {
  const [activeId, setActiveId] = useState();

  const handleSelectTeam = (id) => {
    setActiveId(id);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" fullWidth>
        Принять приглашение
      </Button>
      <s.TeamContainer>
        {teams.map(({ id, name }) => (
          <TeamSelect
            key={id}
            id={id}
            name={name}
            onClick={handleSelectTeam}
            active={id === activeId}
          />
        ))}
      </s.TeamContainer>
    </div>
  );
};
