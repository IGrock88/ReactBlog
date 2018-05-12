
export default class CommentsService{

    constructor(params = null){
        this.url = 'https://jsonplaceholder.typicode.com/comments';
        this.params = params;
    }

    getPostComments(idPost){
        let url = 'https://jsonplaceholder.typicode.com/posts/' + idPost + '/comments';

    }
}