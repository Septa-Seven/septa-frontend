import { Link, Paper, Typography } from "@mui/material";
import { CenteredVH } from "../../components";
import * as s from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { apiUrls } from "./model/apiUrls";

export const Register = () => {
  return (
    <CenteredVH>
      <Paper elevation={1}>
        <s.Container>
          <Typography variant="h4" align="center">
            Авторизация
          </Typography>

          <Link href={apiUrls.github} underline="none">
            <GitHubIcon />
          </Link>

          <Link href={apiUrls.google} underline="none">
            <GoogleIcon />
          </Link>

          <Link href={apiUrls.vk} underline="none">
            <FacebookIcon />
          </Link>
        </s.Container>
      </Paper>
    </CenteredVH>
  );
};
