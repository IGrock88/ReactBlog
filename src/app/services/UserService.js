import AjaxRequest from "./AjaxRequest";

export default class UserService{

    constructor(){
        this.ajax = new AjaxRequest();

    }

    getUsers(callback, params = null){
        const URL = 'https://jsonplaceholder.typicode.com/users';
        this.ajax.send(URL, callback, params);
    }

}