import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { drawerWidth } from "../../utils";

const Header = ({ onToggle, isOpen }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const onLogout = () => {
    Cookies.remove("jwt");
    Cookies.remove("user");
    navigate("/login");
  };

  console.log("isOpen", isOpen)

  React.useEffect(() => {
    const data = Cookies.get("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: (theme) =>
          theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(isOpen && {
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          transition: (theme) =>
            theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggle}
          sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Stack
          sx={{ width: 1 }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight={700} noWrap component="div">
            Flower
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6" noWrap component="div">
              {user?.firstname} {user?.lastName}
            </Typography>
            <IconButton onClick={onLogout}>
              <LogoutIcon sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
