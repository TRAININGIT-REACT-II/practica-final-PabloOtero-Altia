import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isSignedIn } from "../selectors/user";

// Contexto de usuario
// import User from "../contexts/user";

// Obtenemos el componente a renderizar y cualquier otro parámetro
const PrivateRoute = ({children}) => {
  // Obtenemos el contexto para saber si el usuario ha hecho login.
  // const { signedIn } = useContext(User);
  const location = useLocation();
  const signedIn = useSelector((state) => isSignedIn(state));

  // Si el usuario está registrado, cargamos el componente de la ruta.
  // Si no, hacemos un redirect a login
  return (
    signedIn ? (
      children
    ) : (
      <Navigate to="/login" state={
        {
          from: location,
          msg: "Por favor, haz login primero"
        }} replace />
    )
  );
};

export default PrivateRoute;
