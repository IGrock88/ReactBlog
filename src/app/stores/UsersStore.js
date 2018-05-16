import { EventEmitter } from 'events';
import {ADD_USER, FETCH_USERS_START, FETCH_USERS_END} from "../constants/usersConstants";
import dispatcher from '../dispatcher';
import AjaxRequest from "../services/AjaxRequest";

class UsersStore extends EventEmitter {
    constructor()
    {
        super(...arguments);

        this.users = []; //Для хранения комментариев
        this.ajax = new AjaxRequest();
    }

    fetchUsersStart =() =>
    {
        const URL = 'https://jsonplaceholder.typicode.com/users/';
        this.ajax.send(URL, (data) =>{
            dispatcher.dispatch({
                type: FETCH_USERS_END,
                payload: data
            });
        });
    };

    fetchUsersEnd =(users) =>
    {
        this.users = users;
        this.change();
    };

    change =() =>
    {
        this.emit('change', this.users);
    };

    addUser =(user) =>
    {
        this.users.push(user);
        this.change();
    };

    handleActions = (action) =>
    {
        switch (action.type)
        {
            case ADD_USER: {
                this.addUser(action.payload);
                break;
            }
            case FETCH_USERS_START: {
                this.fetchUsersStart();
                break;
            }
            case FETCH_USERS_END: {
                this.fetchUsersEnd(action.payload);
                break;
            }
        }
    }
}

const uS = new UsersStore;
dispatcher.register(uS.handleActions);
export default uS;