// Importamos los tipos de acciones
import types from '../actions/types';


const initialState =
{
    token: localStorage.getItem('token') || null,
    username: localStorage.getItem('username')
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            localStorage.setItem('token', action.user.token)
            localStorage.setItem('username', action.user.username)
            return {
                username: action.user.username,
                token: action.user.token
            }
        case types.SIGN_OUT:
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            return {
                username: '',
                token: ''
            }
        default:
            return state;
    }
}
export default user;