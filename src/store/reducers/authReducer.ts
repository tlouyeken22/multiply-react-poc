
const initState = {
    authError: "",
    loading: false,
    registerStatus: false
};

const authReducer = (state = initState, action: any) => {
    switch (action.type) {

        case 'LOGIN_START':
            console.log('login start');
            return {
                ...state,
                loading: true
            }

        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: action.data.message,
                loading: false
            }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: "",
                loading: false
            }

        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;

        case 'REGISTER_START':
            console.log('login start');
            return {
                ...state,
                loading: true,
                registerStatus: false
            }

        case 'REGISTER_ERROR':
            console.log('registeration error');
            return {
                ...state,
                authError: 'registeration failed',
                loading: false,
                registerStatus: false
            }

        case 'REGISTER_SUCCESS':
            console.log('registeration success');
            return {
                ...state,
                authError: "",
                loading: false,
                registerStatus: true
            }

        default:
            return state;
    }
}

export default authReducer;
