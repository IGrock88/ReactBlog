import React from 'react';
import axios from "axios/index";

export default class News extends React.Component{
    constructor(props){
        super(props);

    }

    getData(url){
        axios({
            method: 'get',
            url: url
        }).then(function (response) {
            console.log(response);
            this.setState({
                articles: response.data
            });
        });
    }

    render(){

        if(!this.props.show) {
            return null;
        }
        let posts = this.props.posts.map((post, index) =>
            <div className='post' key={index}>
                <h4><a href={'/new/' + post.id}>{post.title}</a></h4>
                <p>{post.text}</p>
            </div>
        );

        return(

            <div className="panel-body ">
                {posts}
            </div>
        );


    }
}