import types from './types';

export const signIn = (user) => ({
  type: types.SIGN_IN,
  user
});

export const logOut = () => ({
  type: types.SIGN_OUT
});