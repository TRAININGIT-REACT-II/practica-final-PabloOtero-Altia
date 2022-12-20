import React, { useContext, useState, useEffect } from "react";
import { Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';

import { DEFAULT_STATE } from "../constants/user";

import UserForm from "../components/Forms/UserForm";
import { useDispatch } from "react-redux";

// Contexto de usuario
import User from "../contexts/user";

import useApi from "../hooks/useApi";


export default function Login() {
    const [user, setUser] = useState(DEFAULT_STATE);
    // Obtenemos el mensaje del a ruta si lo hubiera
    const { state } = useLocation();
    // Obtenemos el contexto del usuario
    const userContext = useContext(User);
    

    // Definimos la llamada para login
    const loginRequest = useApi("/api/login", null, {}, false);

    // Comprobamos si hay que mostrar el mensaje
    const displayAlert = state && state.msg != null && !userContext.signedIn;

    useEffect(() => {
        if (loginRequest.data) {
            userContext.updateUser(true);
            localStorage.setItem('token', loginRequest.data.token)
        }
    })


    const handleSubmit = (event) => {
        event.preventDefault();

        //TODO llamar a api/login y guardar token en localStorage
        loginRequest.updateParams({
            method: "POST",
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        });
        loginRequest.perform();
    };

    return (
        (userContext.signedIn ?
            (<Navigate to="/" replace={true}></Navigate>)
            :
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {displayAlert && (
                        <Alert severity="warning">{state.msg}</Alert>
                    )}
                    <UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} buttonText="Sign in" />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        href="/register"
                    >
                        Register
                    </Button>
                </Box>
            </Container>)
    );
}