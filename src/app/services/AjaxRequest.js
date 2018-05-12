import axios from "axios/index";


export default class AjaxRequest {

    request(url, callback, params = null, method = 'get'){
        axios({
            method: method,
            url: url,
            params: params,
        }).then((response)=> {
            console.log(response);
            callback(response.data);
        }).catch((errror) => {
            console.log("Ошибка", errror);
        });
    }
}