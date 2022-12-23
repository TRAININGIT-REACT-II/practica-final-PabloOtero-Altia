import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import CreateUser from "./views/Register";
import Login from "./views/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home";
import Layout from "./views/Layout";
import NotesList from "./views/NotesList";


import store from "./store";
import { Provider } from "react-redux";
import NotesAdd from "./views/NotesAdd";
import NotesDetail from "./views/NotesDetail";
import NotesEdit from "./views/NotesEdit";

// Componente principal de la aplicación.
const App = () => {

  // Mostramos la aplicación
  return (
    <Provider store={store}>
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
            <Route path="notes/:id" element={
              <PrivateRoute>
                <NotesDetail />
              </PrivateRoute>
            }>
            </Route>
            <Route path="notes/:id/edit" element={
              <PrivateRoute>
                <NotesEdit />
              </PrivateRoute>
            }>
            </Route>
            <Route path="notes/new" element={
              <PrivateRoute>
                <NotesAdd />
              </PrivateRoute>
            }>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes >
      </BrowserRouter>
    </Provider>
  );
};

export default App;
