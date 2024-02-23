import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
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
        <AppBar position="static">
            <Toolbar>
                <img src="E:\google solution challenge\src\assets\react.svg" alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                <Typography variant="h6" component={Link} to="/home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    React App
                </Typography>
                <div>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>Home</Link>
                    <Link to="/library" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>Library</Link>
                    <Link to="/collection" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>MyCollection</Link>
                </div>
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
            </Toolbar>
        </AppBar>
    );
}
