import Service from './Service';
import axios from "axios";

class UserService extends Service{

    constructor(params = null){
        super();
        this.url = 'https://jsonplaceholder.typicode.com/users';
        this.params = params;
    }

    loadData(){
        axios({
            method: 'get',
            url: this.url,
            params: this.params,
        }).then(function (response) {
            console.log(response);
            super.setData(response.data);
        });
    }
}