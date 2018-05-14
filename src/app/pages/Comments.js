import React from 'react';
import CommentsService from "../services/CommentsService";
import LoadingAnimation from "../components/global/LoadingAnimation";
import CommentsList from "../components/Comments/CommentsList";

export default class Comments extends React.Component{

    render(){

        return(
            <main className="col-lg-8 left-col">
                <div className="panel"><CommentsList/></div>
            </main>
        )
    }
}