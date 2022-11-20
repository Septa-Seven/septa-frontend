import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as s from "./styles";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useStores } from "../../StoreProvider";
import { Popover, Tooltip } from "@mui/material";
import { routes } from "../../shared/routes";
import { useNavigate } from "react-router";
import { LoadingButton } from "@mui/lab";
import { cutString } from "../../utils/cutString";

const NavbarView = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { authStore, profileStore } = useStores();
  const navigate = useNavigate();

  const dropDownRef = useRef();

  const HandleCommandClick = () => {
    setIsShowMenu(false);

    if (profileStore.teamId) {
      navigate(routes.team.replace(":id", profileStore.teamId));
    } else {
      navigate(routes.createTeam);
    }
  };

  const TeamButton = (
    <>
      <Button fullWidth onClick={HandleCommandClick}>
        Команда
      </Button>
    </>
  );

  return (
    <s.Container>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6">
              <Link to={routes.home}>Septa</Link>
            </Typography>

            <s.MenuContainer>
              <Typography>
                <Link to={routes.leagues}>Лиги</Link>
              </Typography>
              {authStore.accessToken ? (
                <>
                  <Tooltip title={profileStore.username}>
                    <LoadingButton
                      color="secondary"
                      variant="contained"
                      loading={!profileStore.username}
                      onClick={() => {
                        setIsShowMenu(true);
                      }}
                      ref={dropDownRef}
                      title={profileStore.username}
                    >
                      {cutString(profileStore.username, 10) || "loading..."}
                    </LoadingButton>
                  </Tooltip>

                  <Popover
                    open={isShowMenu}
                    onClose={() => setIsShowMenu(false)}
                    anchorEl={dropDownRef.current}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div>
                      {TeamButton}
                      <Button
                        fullWidth
                        onClick={() => {
                          authStore.logout();
                        }}
                      >
                        Выйти
                      </Button>
                    </div>
                  </Popover>
                </>
              ) : (
                <Typography variant="h6">
                  <Link to={routes.login}>Войти</Link>
                </Typography>
              )}
            </s.MenuContainer>
          </Toolbar>
        </Container>
      </AppBar>
    </s.Container>
  );
};

export const Navbar = observer(NavbarView);
