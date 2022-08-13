import * as s from "./styles";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

export const CreateTeam = ({ onSubmit, serverErrors }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();

  // В отдельный хук
  useEffect(() => {
    serverErrors &&
      Object.entries(serverErrors).map((error) => {
        setError(error[0], { type: "custom", message: error[1][0] });
      });
  }, [serverErrors, setError]);

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <s.TextInput
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              label="Название команды"
              variant="outlined"
              fullWidth
              error={errors[name]}
              helperText={errors[name]?.message}
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
              error={errors[name]}
              helperText="Не обязательно"
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
