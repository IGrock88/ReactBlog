import AjaxRequest from "./AjaxRequest";

export default class BlogService{

    getBlogs(callback, params = null){
        const URL = 'https://my-json-server.typicode.com/IGrock88/json/blogs';
        new AjaxRequest().request(URL, callback, params);
    }

    getOneBlog(id, params = null){
        // TODO: реализовать метод получения 1 блога по ид
    }

    deleteOneBlog(id, params = null){
        // TODO: реализовать метод удаления 1 блога по ид
    }
}
