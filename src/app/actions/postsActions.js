import {FETCH_POSTS} from "../constants/postsConstants";
import AjaxRequest from "../services/AjaxRequest";


export function fetchPosts() {
    let url = 'https://my-json-server.typicode.com/IGrock88/json/posts';
    let posts = [];
    new AjaxRequest().send(url, (data) => {
       posts = data;
    });
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}