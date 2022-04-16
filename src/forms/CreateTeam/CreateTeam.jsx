import * as s from "./styles";
import { LoadingButton } from "@mui/lab";
import { useForm, Controller } from "react-hook-form";
import { createTeam } from "./module/api";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const CreateTeam = () => {
  const { handleSubmit, control } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await createTeam(data);
    } catch (e) {
      toast.error(e.response.data.detail, { position: "bottom-right" });
    } finally {
      setIsLoading(false);
    }
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

        <LoadingButton type="submit" variant="contained" loading={isLoading}>
          Создать команду
        </LoadingButton>
      </form>
    </>
  );
};
