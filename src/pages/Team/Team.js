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
  const { teamStore, profileStore } = useStores();
  const params = useParams();

  useEffect(() => {
    teamStore.getTeam(params.id);
    teamStore.getUsers("", false);
    teamStore.getTeamSettings();
    profileStore.teamId && teamStore.getInvitations();
  }, [params.id, profileStore.teamId, teamStore]);

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
          <s.TeamTitleWrapper>
            <Typography variant="h5">Участники</Typography>
            <Typography>
              {teamStore.membersCount}/{teamStore.settings.maxTeamSize}
            </Typography>
          </s.TeamTitleWrapper>
          <List data={listMapper(teamStore.team, "username")} />
        </Plate>

        {teamStore.isLeader && (
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
              {teamStore.isTeamFull ? (
                <Typography variant="h6">Команда заполнена</Typography>
              ) : (
                <>
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
                </>
              )}
            </Plate>
          </div>
        )}
      </s.TeamInfoContainer>
    </>
  );
};

export const Team = observer(TeamView);
