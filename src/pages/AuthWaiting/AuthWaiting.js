import { getQueryParams } from "../../utils/getQueryParams";
import { CenteredVH } from "../../components";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../modules/auth/authReducer";

export const AuthWaiting = ({ endpoint }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = getQueryParams(window.location.href, "code");
    dispatch(auth({ code, endpoint }));
  }, [dispatch, endpoint]);

  return (
    <CenteredVH>
      <CircularProgress />
    </CenteredVH>
  );
};
