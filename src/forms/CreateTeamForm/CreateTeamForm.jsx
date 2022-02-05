import * as s from "./styles";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

export const CreateTeamForm = () => {
  const { handleSubmit, control } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          control={control}
          name={"name"}
          render={({ field: { onChange, value, name } }) => (
            <s.TextInput
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              label="Название команды"
              variant="outlined"
            />
          )}
        />

        <Controller
          control={control}
          name={"description"}
          render={({ field: { onChange, value, name } }) => (
            <s.TextInput
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              label="Описание команды"
              variant="outlined"
            />
          )}
        />

        <Button type="submit" variant="contained">
          Создать команду
        </Button>
      </form>
    </>
  );
};
