import { Plate } from "../../components";
import { Button } from "@mui/material";
import { Invites } from "../../forms";
import * as s from "./styles";

export const CreateTeam = () => {
  return (
    <Plate>
      <s.Container>
        <s.Title variant="h5">У вас нет команды</s.Title>
        <Button variant="contained" fullWidth>
          Создать команду
        </Button>

        <s.Or variant="subtitle1">или</s.Or>

        <s.FormContainer>
          <Invites />
        </s.FormContainer>
      </s.Container>
    </Plate>
  );
};
