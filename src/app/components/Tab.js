import React from 'react';
import axios from "axios/index";

export default class Tab extends React.Component{

    constructor(props){
        super(props);
        this.urlTypes = ['/post/', '/new/'];
        this.articles = [];
        this.state = {
            articles: []
        }
    }


    getData(url){
        axios({
            method: 'get',
            url: url
        }).then((response) => {
            console.log(response);
            this.state.articles = response.data
        });
    }

    componentWillMount(){
        console.log(this.props.activeTab);
        axios({
            method: 'get',
            url: 'posts.json'
        }).then((response) => {
            console.log(response);
            this.setState({
                articles:   response.data
            })
        });
    }

    // componentDidUpdate(){
    //     console.log(this.props.activeTab);
    //     if(this.props.activeTab === 1)
    //     this.getData('news.json');
    //     else{
    //         this.getData('posts.json');
    //     }
    // }

    render(){
        console.log(this.props);
        let articles = this.state.articles.map((article, index) =>
            <div className='article' key={index}>
                <h4><a href={'/' + this.urlTypes[0] +'/' + article.id}>{article.title}</a></h4>
                <p>{article.text}</p>
            </div>
        )
        return (<div className="panel-body ">
                    {articles}
                </div>);
    }
}