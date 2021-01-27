
import * as Actions from '../actions/ActionTypes';

const LoginReducer = (state = { data: {} }, action) => {
    switch (action.type) {
        case Actions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
}

export default LoginReducer;
