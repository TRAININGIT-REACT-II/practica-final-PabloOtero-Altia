import { Outlet } from "react-router-dom";

// Contexto de usuario
import { Container } from "@mui/system";
import MyAppBar from "../components/Layout/MyAppBar";
import ErrorBoundary from "../components/ErrorBoundary";


const Layout = () => {
    return (
        <>
            <MyAppBar></MyAppBar>
            <ErrorBoundary message="Algo ha salido mal!">
                <Container maxWidth={false}>
                    <Outlet />
                </Container>
            </ErrorBoundary>
        </>
    );
}

export default Layout;