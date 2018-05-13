import React from 'react';
import CommentsService from "../../services/CommentsService";
import LoadingAnimation from "../global/LoadingAnimation";


export default class CommentsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
        let commentService = new CommentsService();
        commentService.getComments((data) => {
            this.setState({
                comments: data
            })
        });

    }



    render() {
        if(!this.state.comments.length) return <LoadingAnimation/>;

        let comments = this.state.comments.map((comment, index) =>
            <div className='well well-sm' key={index}><h4>{comment.email}:</h4>{comment.body}</div>
        );

        return (
            <div>
                {comments}
            </div>
        );
    }
}