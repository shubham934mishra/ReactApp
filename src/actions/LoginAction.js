import * as ActionTypes from './ActionTypes';

export const getLoginData = (loginObj) => {
    return dispatch => {
        dispatch(fetchLoginData(loginObj))
    }
}


export const fetchLoginData = (data) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        data: data
    }
}