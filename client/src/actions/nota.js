import types from './types';

export const addNota = (nota) => ({
  type: types.ADD_NOTA,
  nota
});

export const updateNota = (nota) => ({
  type: types.UPDATE_NOTA,
  nota
});

export const deleteNota = (nota) => ({
  type: types.DELETE_NOTA,
  nota
});
