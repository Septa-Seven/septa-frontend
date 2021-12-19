import { IconButton, Paper, Typography } from "@mui/material";
import { CenteredVH } from "../../components";
import * as s from "./styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Register = () => {
  return (
    <CenteredVH>
      <Paper elevation={1}>
        <s.Container>
          <Typography variant="h4" align="center">
            Авторизация
          </Typography>

          <IconButton aria-label="upload picture" component="span" size="large">
            <GitHubIcon />
          </IconButton>

          <IconButton aria-label="upload picture" component="span" size="large">
            <GoogleIcon />
          </IconButton>

          <IconButton aria-label="upload picture" component="span" size="large">
            <FacebookIcon />
          </IconButton>
        </s.Container>
      </Paper>
    </CenteredVH>
  );
};
