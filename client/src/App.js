import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import CreateUser from "./views/Register";
import Login from "./views/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Layout from "./views/Layout";
import NotesList from "./views/NotesList";
import { useState } from "react";

// Contexto de usuario
import User from "./contexts/user";

// Componente principal de la aplicación.
const App = () => {
  const [signedIn, setSignedIn] = useState(
    () => localStorage.getItem('token') !== null
  );

  // Mostramos la aplicación
  return (
    <User.Provider value={{ signedIn, updateUser: setSignedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} exact>
            </Route>
            <Route path="login" element={<Login />}>
            </Route>
            <Route path="register" element={
              <CreateUser />
            }>
            </Route>
            <Route path="notes" element={
              <PrivateRoute>
                <NotesList />
              </PrivateRoute>
            }>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes >
      </BrowserRouter>
    </User.Provider>
  );
};

export default App;
