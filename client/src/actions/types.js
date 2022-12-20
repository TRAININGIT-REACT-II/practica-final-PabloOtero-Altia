// Definimos la lista de acciones
const actions = [
  // NOTAS
  "ADD_ NOTA",
  "UPDATE_NOTA",
  "DELETE_NOTA",

  // Usuarios
  "SIGN_IN",
  "SIGN_OUT"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
