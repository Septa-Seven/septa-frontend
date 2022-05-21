import { CreateTeam, List, Plate } from "../../components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../shared/routes";
import { getQueryParams } from "../../utils/getQueryParams";
import * as s from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { useStores } from "../../StoreProvider";
import { useEffect } from "react";
import { listMapper } from "../../utils/listMapper";
import { observer } from "mobx-react-lite";

const CreateTeamFormView = () => {
  const formState = getQueryParams(window.location.href, "formState");
  const { teamStore } = useStores();
  const navigate = useNavigate();
  const handleAcceptInvitation = async (inviteId) => {
    await teamStore.acceptInvitation(inviteId);
    const selectedTeam = teamStore.userInvitations.find(
      ({ id }) => id === inviteId
    );
    navigate(routes.team.replace(":id", selectedTeam.team));
  };

  useEffect(() => {
    teamStore.getUserInvitations();
  }, [teamStore]);

  return (
    <Plate>
      <s.Container>
        {formState !== "createTeam" ? (
          <>
            <s.Title variant="h5">У вас нет команды</s.Title>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                navigate(`${routes.createTeam}?formState=createTeam`);
              }}
            >
              Создать команду
            </Button>
            <s.Or variant="subtitle1">или</s.Or>
            <s.FormContainer>
              <List
                data={listMapper(teamStore.userInvitations, "teamName")}
                icon={<AddIcon />}
                onClick={handleAcceptInvitation}
              />
            </s.FormContainer>
          </>
        ) : (
          <>
            <s.Title variant="h5">Создание команды</s.Title>
            <CreateTeam />
          </>
        )}
      </s.Container>
    </Plate>
  );
};

export const CreateTeamForm = observer(CreateTeamFormView);
