import { useEffect, useState } from "react";
import { useStores } from "../../StoreProvider";
import { useParams } from "react-router";
import {
  CircularProgress,
  debounce,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { CenteredVH, List, Plate } from "../../components";
import * as s from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { QuitTeam } from "./components";
import { listMapper } from "../../utils/listMapper";

const TeamView = () => {
  const { teamStore, profileStore } = useStores();
  const { id } = useParams();
  const [primaryLoad, setPrimaryLoad] = useState(false);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      await teamStore.getUsers("", false);
      await teamStore.getTeamSettings();
      profileStore.teamId && (await teamStore.getInvitations());
      setPrimaryLoad(true);
    };

    getInfo();
  }, [profileStore.teamId, teamStore]);

  useEffect(() => {
    teamStore.getTeam(id);
  }, [id, teamStore]);

  const handleSearch = debounce((value) => {
    teamStore.getUsers(value);
  }, 160);

  const handleInvite = async (userId) => {
    await teamStore.inviteUser(userId);
    await teamStore.getUsers("", false);
    setUsername("");
    await teamStore.getInvitations();
  };

  const handleDeleteInvitation = async (userId) => {
    await teamStore.deleteUserInvitations(userId);
    await teamStore.getInvitations();
    await teamStore.getUsers("", false);
  };

  return (
    <>
      {primaryLoad && (
        <>
          <Plate>
            <s.InfoWrapper>
              <div>
                <Typography variant="h5">{teamStore.name}</Typography>
                <Typography variant="body1">
                  Описание -{" "}
                  {teamStore.description
                    ? teamStore.description
                    : "отсутствует"}
                </Typography>
              </div>

              {teamStore.leader && teamStore.isMyTeam && (
                <QuitTeam isLeader={teamStore.isLeader} />
              )}
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

              <s.ListWrapper>
                <List data={listMapper(teamStore.team, "username")} />
              </s.ListWrapper>
            </Plate>

            {teamStore.isLeader && (
              <div>
                <Plate>
                  <Typography variant="h5">Приглашения</Typography>
                  {teamStore.invitations.length > 0 ? (
                    <s.ListWrapper>
                      <List
                        data={listMapper(teamStore.invitations, "userName")}
                        icon={<CloseIcon />}
                        onClick={handleDeleteInvitation}
                      />
                    </s.ListWrapper>
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
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
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
      )}

      {!primaryLoad && (
        <CenteredVH>
          <CircularProgress />
        </CenteredVH>
      )}
    </>
  );
};

export const Team = observer(TeamView);
