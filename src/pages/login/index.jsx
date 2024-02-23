import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField, Container } from "@mui/material";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password");
        }
    };

    const handleRegisterClick = () => {
        // Navigate to the register page
        navigate('/register');
    };

    return (
        <Container component="div" maxWidth="sm" style={{ margin: 'auto', textAlign: 'center', marginTop: '20px' }}>
            {isLoggedIn ? (
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome, {username}!
                </Typography>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        type="text"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ marginBottom: '10px' }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Button type="button" variant="contained" color="secondary" fullWidth onClick={handleRegisterClick} style={{ marginTop: '10px' }}>
                        Register
                    </Button>
                </form>
            )}
        </Container>
    );
}
