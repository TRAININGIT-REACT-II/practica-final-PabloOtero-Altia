import { useState, useContext, useEffect } from "react"
import { DEFAULT_STATE } from "../constants/user";
import UserForm from "../components/Forms/UserForm";
import Grid2 from '@mui/material/Unstable_Grid2'
import { Alert } from '@mui/material';

// Contexto de usuario
// import User from "../contexts/user";

import useApi from "../hooks/useApi";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isSignedIn } from '../selectors/user';
import { signIn } from "../actions/user";


const CreateUser = () => {
    const [user, setUser] = useState(DEFAULT_STATE);
    const dispatch = useDispatch();
    const signedIn = useSelector((state) => isSignedIn(state));
    const registerRequest = useApi(API_URL + "/register", {}, false);

    useEffect(() => {
        if (registerRequest.data) {
            dispatch(signIn(loginRequest.data));
        }
    })


    const handleSubmit = (event) => {
        event.preventDefault();

        // Definimos la llamada para regsiter
        registerRequest.updateParams({
            method: "POST",
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            })
        });

        registerRequest.perform();
    };

    return (signedIn ?
        (<Navigate to="/" replace={true}></Navigate>)
        : (<section>
            <h2>Crear usuario</h2>

            <Grid2 container spacing={2} width="50%">
                {registerRequest.error !== null ?
                    (<Grid2 width={"100%"}>
                        <Alert severity="warning">{registerRequest.error}</Alert>
                    </Grid2>) : null}
                <Grid2 width={"100%"}>
                    <UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} buttonText="Register" />
                </Grid2>
            </Grid2>
        </section>))
}

export default CreateUser;