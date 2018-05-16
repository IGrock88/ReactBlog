import { EventEmitter } from 'events';
import {ADD_USER, FETCH_USERS_START, FETCH_USERS_END, EDIT_USER, DELETE_USER} from "../constants/usersConstants";
import dispatcher from '../dispatcher';
import AjaxRequest from "../services/AjaxRequest";

class UsersStore extends EventEmitter {
    constructor()
    {
        super(...arguments);

        this.users = []; // для пользователей
        this.ajax = new AjaxRequest();
    }

    fetchUsersStart = () =>
    {
        const URL = 'https://jsonplaceholder.typicode.com/users/';
        this.ajax.send(URL, (data) =>{
            dispatcher.dispatch({
                type: FETCH_USERS_END,
                payload: data
            });
        });
    };

    deleteUser = (userId) => {
        console.log("id", userId);
        delete this.users[userId];
        console.log(this.users);
        this.change();

        //Заготовка
        // const URL = '/user/delete';
        // params = {userId: userId}
        // this.ajax.send(URL, (data) => {
        //    if(data.result == 1) this.change();
        // }, params);
    };

    editUser = (user) =>{

    };

    fetchUsersEnd = (users) =>
    {
        for(let i = 0; i < users.length; i++){
            this.users[users[i].id] = users[i];
        }
        console.log(this.users);
        this.change();
    };

    change = () =>
    {
        this.emit('change', this.users);
    };

    addUser = (user) =>
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
            case EDIT_USER: {
                this.editUser(action.payload);
                break;
            }
            case DELETE_USER: {
                this.deleteUser(action.payload);
                break;
            }
        }
    }
}

const uS = new UsersStore;
dispatcher.register(uS.handleActions);
export default uS;