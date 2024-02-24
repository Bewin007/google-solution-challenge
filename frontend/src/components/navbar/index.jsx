import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Slide, useScrollTrigger, CssBaseline, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import logo from '../../assets/react.svg'; // Correct relative path to your logo

const Logo = styled('img')({
    height: '40px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0, 1),
    color: theme.palette.common.white,
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  }));
  
  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    transition: '0.3s ease',
    
    '&:hover': {
      boxShadow: `0 2px 4px -1px ${theme.palette.primary.main}`,
    },
  }));
  
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
  }));

  
const NavBox = styled(Box)(({ theme }) => ({
    marginLeft: 'auto',
    '& > a': {
      margin: theme.spacing(0, 2),
      textDecoration: 'none',
      color: theme.palette.common.white,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


  export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      navigate('/');
      console.log("Logged out");
      handleClose();
    };
  
    return (
      <>
        <CssBaseline />
        <HideOnScroll {...props}>
          <StyledAppBar position="fixed">
        <StyledToolbar>
                <Logo src={logo} alt="Logo" />
              <NavBox sx={{ flexGrow: 1, display: 'flex' }}>
                <StyledButton component={Link} to="/home">Home</StyledButton>
                <StyledButton component={Link} to="/library">Library</StyledButton>
                <StyledButton component={Link} to="/collection">My Collection</StyledButton>
              </NavBox>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </StyledToolbar>
          </StyledAppBar>
        </HideOnScroll>
        <Toolbar /> {/* This Toolbar pushes content down so it's not under the AppBar */}
      </>
    );
  }