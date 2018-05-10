import React from 'react';
import axios from "axios/index";

export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }

    }

    componentWillMount(){
        const URL = 'posts.json';
        this.getData(URL);
    }

    getData(url){
        axios({
            method: 'get',
            url: url
        }).then((response) => {
            console.log(response);
            this.setState({
                articles: response.data
            });
        });
    }

    render(){

        let articles = this.state.articles.map((article, index) =>
            <div className='post' key={index}>
                <h4><a href={'/post/' + article.id}>{article.title}</a></h4>
                <p>{article.text}</p>
            </div>
        );

        return(
            <div className="panel-body ">
                <h3>Посты</h3>
                {articles}
            </div>
        );


    }

}