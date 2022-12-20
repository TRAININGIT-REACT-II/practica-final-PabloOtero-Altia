import { Link, Outlet } from "react-router-dom";
import Status from "../components/Status";
import { useEffect, useState, useContext } from "react";

// Contexto de usuario
import User from "../contexts/user";
import { Container } from "@mui/system";
import MyAppBar from "../components/Layout/MyAppBar";

const Layout = () => {

    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);

    const { signedIn } = useContext(User);

    // Cargamos el estado del servidor
    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setStatus(data.status === "ok"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <MyAppBar></MyAppBar>
            <Container maxWidth={false}>
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;