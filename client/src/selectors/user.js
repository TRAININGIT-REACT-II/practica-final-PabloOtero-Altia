// Los selectores te permiten obtener datos del store de
// redux. Con relesect, estos valores se memorizan e incluso
// puedes crear combinaciones fácilmente;

export const isSignedIn = (state) => Boolean(state.token);

export const getToken = (state) => state.token;
