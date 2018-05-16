import dispacher from '../dispatcher';
import {ADD_USER, FETCH_USERS_START} from "../constants/usersConstants";

export function addUser(title, userId, body) {
    const comment = {
        title,
        userId,
        body
    };
    dispacher.dispatch({
        type: ADD_USER,
        payload: comment
    });
}

export function fetchUser() {
    dispacher.dispatch({
        type: FETCH_USERS_START
    });
}

