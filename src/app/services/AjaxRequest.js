import axios from "axios/index";


export default class AjaxRequest {

    request(url, callback, params = null, method = 'get'){
        axios({
            method: method,
            url: url,
            params: params,
        }).then((response)=> {
            console.log(response);
            let data = [];
            for(let i = 0; i < response.data.length; i++){
                let id = response.data[i].id;
                data[id] = response.data[i]; // добавляю в массив, индекс ставлю ид чтобы потом легко управлять данными
            }
            callback(data);

        }).catch((errror) => {
            console.log("Ошибка", errror);
        });
    }
}