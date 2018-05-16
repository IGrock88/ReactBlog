import dispacher from '../dispatcher';
import {ADD_USER, FETCH_USERS_START, DELETE_USER, EDIT_USER, GET_ONE_USER_START} from "../constants/usersConstants";

export function addUser(title, userId, body) {
    const comment = {
        title,
        userId,
        body
    };
    dispacher.dispatch({
        type: ADD_USER,
        payload: user
    });
}

export function fetchUser() {
    dispacher.dispatch({
        type: FETCH_USERS_START
    });
}

export function deleteUserAction(userId) {
    dispacher.dispatch({
        type: DELETE_USER,
        payload: userId
    })
}

export function editUserAction(user) {
    dispacher.dispatch({
        type: EDIT_USER,
        payload: user
    })
}




