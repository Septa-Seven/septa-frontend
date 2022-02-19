import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as s from "./styles";
import { observer } from "mobx-react-lite";
import { useContext, useRef, useState } from "react";
import { storeContext } from "../../StoreProvider";
import { Modal } from "../Modal";
import { CreateTeamForm } from "../../forms";
import { Popover } from "@mui/material";
import { routes } from "../../shared/routes";
import { useNavigate } from "react-router";

const NavbarView = () => {
  const [isShowTeamForm, setIsShowTeamForm] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { authStore, profileStore } = useContext(storeContext);
  const navigate = useNavigate();

  const dropDownRef = useRef();

  const TeamButton = (
    <>
      <Button
        fullWidth
        onClick={() =>
          navigate(routes.team.replace(":id", profileStore.teamId))
        }
      >
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

            <Box
              style={{
                display: "flex",
                gap: "10px",
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              {authStore.accessToken ? (
                <>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      setIsShowMenu(true);
                    }}
                    ref={dropDownRef}
                  >
                    {profileStore.username}
                  </Button>
                  <Popover
                    open={isShowMenu}
                    onClose={() => setIsShowMenu(false)}
                    anchorEl={dropDownRef.current}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <s.MenuContainer>
                      {TeamButton}
                      <Button
                        fullWidth
                        onClick={() => {
                          authStore.logout();
                        }}
                      >
                        Выйти
                      </Button>
                    </s.MenuContainer>
                  </Popover>
                </>
              ) : (
                <Typography variant="h6">
                  <Link to={routes.login}>Войти</Link>
                </Typography>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        isShow={isShowTeamForm}
        handleClose={() => setIsShowTeamForm(false)}
      >
        <CreateTeamForm />
      </Modal>
    </s.Container>
  );
};

export const Navbar = observer(NavbarView);
