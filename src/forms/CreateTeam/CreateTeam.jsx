import * as s from "./styles";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { useStores } from "../../StoreProvider";

export const CreateTeam = () => {
  const { handleSubmit, control } = useForm();
  const { teamStore, profileStore } = useStores();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await teamStore.createTeam(data);
    navigate(`/team/${profileStore.teamId}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, name } }) => (
            <s.TextInput
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              label="Название команды"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value, name } }) => (
            <s.TextInput
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              label="Описание команды"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <LoadingButton type="submit" variant="contained">
          Создать команду
        </LoadingButton>
      </form>
    </>
  );
};
