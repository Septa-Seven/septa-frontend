import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { pageNames, routes } from "../../shared/routes";
import * as s from "./styles";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { storeContext } from "../../StoreProvider";
import { Modal } from "../Modal";
import { CreateTeamForm } from "../../forms/CreateTeamForm";

const NavbarView = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isShowTeamForm, setIsShowTeamForm] = useState(false);
  const { authStore, profileStore } = useContext(storeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <s.Container>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link to={routes.home}>Septa</Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {Object.keys(pageNames).map((key) => (
                    <div key={key}>{key}</div>
                  ))}
                  {Object.keys(pageNames).map((key) => (
                    <MenuItem key={key} onClick={handleCloseNavMenu}>
                      <Link to={routes[key]}>
                        <Typography textAlign="center">
                          {pageNames[key]}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Septa
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {Object.keys(pageNames).map((key) => (
                  <Link to={routes[key]} key={key}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {pageNames[key]}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box
                sx={{ flexGrow: 0 }}
                style={{ display: "flex", gap: "10px" }}
              >
                {authStore.accessToken ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setIsShowTeamForm(true)}
                  >
                    Создать команду
                  </Button>
                ) : (
                  <Typography variant="h6">
                    <Link to={routes.login}>Войти</Link>
                  </Typography>
                )}

                {!!profileStore.username && (
                  <Typography variant="h6">{profileStore.username}</Typography>
                )}
              </Box>
            </Toolbar>
          </s.Container>
        </Container>
      </AppBar>
      <Modal
        isShow={isShowTeamForm}
        handleClose={() => setIsShowTeamForm(false)}
      >
        <CreateTeamForm />
      </Modal>
    </>
  );
};

export const Navbar = observer(NavbarView);
