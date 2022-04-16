import { CreateTeam, Plate } from "../../components";
import { Button } from "@mui/material";
import { Invites } from "../../forms";
import { useNavigate } from "react-router";
import { routes } from "../../shared/routes";
import { getQueryParams } from "../../utils/getQueryParams";
import * as s from "./styles";

export const CreateTeamForm = () => {
  const formState = getQueryParams(window.location.href, "formState");
  const navigate = useNavigate();

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
              <Invites />
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
