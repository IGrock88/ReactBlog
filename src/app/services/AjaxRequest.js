import axios from "axios/index";


export default class AjaxRequest {

    send(url, callback, params = null, method = 'get'){
        axios({
            method: method,
            url: url,
            params: params,
        }).then((response)=> {
            console.log(response);
            let data = [];
            // Сделано чтобы всегда был один тип данных, можно переиспользовать элементы например BlogItem
            if(Array.isArray(response.data)) data = response.data;
            else data.push(response.data);
            callback(data);
        }).catch((errror) => {
            console.log("Ошибка", errror);
        });
    }
}