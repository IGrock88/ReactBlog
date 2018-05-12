import axios from "axios/index";


export default class AjaxRequest {

    constructor(){
        this.data = [];
    }

    getData(){
        return this.data;
    }

    request(url, params = null, method = 'get'){
        axios({
            method: method,
            url: url,
            params: params,
        }).then(function (response) {
            console.log(response);
            for(let i = 0; i < response.data.length; i++){
                let id = response.data[i].id;
                this.data[id] = response.data[i]; // добавляю в массив, индекс ставлю ид чтобы потом легко управлять данными
            }
        }).catch((errror) => {
            console.log("Ошибка", errror);
        });
    }
}