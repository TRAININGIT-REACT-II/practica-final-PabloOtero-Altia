import types from './types';

export const signIn = (user) => ({
  type: types.SIGN_IN,
  user
});

export const signOut = (user) => ({
  type: types.SIGN_OUT,
  user
});