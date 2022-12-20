// Importamos los tipos de acciones
import types from '../actions/types';


const initialState = {
    username: '',
    token: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                username: action.username,
                token: action.token
            }
        case types.SIGN_OUT:
            return {
                username:'',
                token: ''
            }
        default:
            return state;
    }
}
export default user;