import { useEffect } from "react";
import { useStores } from "../../StoreProvider";
import { useParams } from "react-router";
import { debounce, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { List, Plate } from "../../components";
import * as s from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { QuitTeam } from "./components";
import { listMapper } from "../../utils/listMapper";

const TeamView = () => {
  const { teamStore } = useStores();
  const params = useParams();

  useEffect(() => {
    teamStore.getTeam(params.id);
    teamStore.getUsers("", false);
    teamStore.getInvitations();
  }, [params.id, teamStore]);

  const handleSearch = debounce((value) => {
    teamStore.getUsers(value);
  }, 160);

  const handleInvite = async (userId) => {
    await teamStore.inviteUser(userId);
    await teamStore.getUsers("", false);
    await teamStore.getInvitations();
  };

  const handleDeleteInvitation = async (userId) => {
    await teamStore.deleteUserInvitations(userId);
    await teamStore.getUsers("", false);
    await teamStore.getInvitations();
  };

  return (
    <>
      <Plate>
        <s.InfoWrapper>
          <div>
            <Typography variant="h5">{teamStore.name}</Typography>
            <Typography variant="body1">
              Описание -{" "}
              {teamStore.description ? teamStore.description : "отсутствует"}
            </Typography>
          </div>

          {teamStore.leader && <QuitTeam isLeader={teamStore.isLeader} />}
        </s.InfoWrapper>
      </Plate>
      <s.TeamInfoContainer>
        <Plate>
          <Typography variant="h5">Участники</Typography>
          <List data={listMapper(teamStore.team, "username")} />
        </Plate>

        <div>
          <Plate>
            <Typography variant="h5">Приглашения</Typography>
            {teamStore.invitations.length > 0 ? (
              <List
                data={listMapper(teamStore.invitations, "userName")}
                icon={<CloseIcon />}
                onClick={handleDeleteInvitation}
              />
            ) : (
              <Typography variant="h6">Нет приглашений</Typography>
            )}
          </Plate>

          <Plate>
            <Typography variant="h5">Пригласить участника</Typography>
            <TextField
              label="Имя"
              variant="standard"
              fullWidth
              onChange={(event) => {
                handleSearch(event.target.value);
              }}
            />
            <s.ListWrapper>
              <List
                data={listMapper(teamStore.users, "username")}
                showSearch
                icon={<AddIcon />}
                onClick={handleInvite}
              />
            </s.ListWrapper>
          </Plate>
        </div>
      </s.TeamInfoContainer>
    </>
  );
};

export const Team = observer(TeamView);
