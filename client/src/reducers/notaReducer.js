// Importamos los tipos de acciones
import types from '../actions/types';

// Estado inicial
const initialState = {
  list: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    // Agregar un NOTA
    case types.ADD_NOTA:
      return {
        list: [
          // Hacemos uso del spread operator para expandir los elementos
          // del array state.list
          ...state.list, {
            nota: action.nota
          }
        ]
      };
    case types.DELETE_NOTA:
      return {
        list: [
          ...state.list.filter( nota => nota !== action.nota)
        ]
      }
    default:
      return state;
  }
}

export default reducer;
