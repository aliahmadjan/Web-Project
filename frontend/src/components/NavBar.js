import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    Button,
  } from "@mui/material";
  import LogoutIcon from "@mui/icons-material/Logout";
  import ElderlyIcon from '@mui/icons-material/Elderly';
  import React from "react";
  //import { useContext } from "react";
  import { theme } from "../theme/Default-theme";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useNavigate} from "react-router-dom";
  import IconButton from "@mui/material/IconButton";
  //import { AuthContext } from '../../src/context/AuthContext';
  
  const StyledToolbar = styled(Toolbar)({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
  });
  
  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }));
  
  const LogoutButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "red",
    },
  }));
  
  const NavBar = (props) => {
   const navigate = useNavigate();

    const logoutHandler = () =>
    {
            navigate("/login");
    }
    const { handleDrawerToggle } = props;
  
    return (
      <div>
        <AppBar
          sx={{
            position: "fixed",
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <StyledToolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Icons>
              <ElderlyIcon />
              <Typography variant="h6">VeteranMeet</Typography>
            </Icons>
  
            <LogoutButton variant="contained" onClick={logoutHandler}>
              <LogoutIcon />
            </LogoutButton>
          </StyledToolbar>
        </AppBar>
      </div>
    );
  };
  
  export default NavBar;
  