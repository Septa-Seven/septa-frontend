import { getQueryParams } from "../../utils/getQueryParams";
import { CenteredVH } from "../../components";
import { CircularProgress } from "@mui/material";

export const AuthWaiting = () => {
  const code = getQueryParams(window.location.href, "code");
  console.log(code);

  return (
    <CenteredVH>
      <CircularProgress />
    </CenteredVH>
  );
};
