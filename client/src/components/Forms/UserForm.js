import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const UserForm = ({ user, setUser, handleSubmit, buttonText}) => {

    // Devolvemos una funcion para modificar una parte del estado!
    const onChange = (key) => {
        return (e) => setUser({
            ...user,
            [key]: e.target.value
        });
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nombre de usuario"
                name="username"
                autoComplete="username"
                value={user.username}
                onChange={onChange("username")}
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={onChange("password")}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                {buttonText}
            </Button>
        </Box>
    );
}

export default UserForm;