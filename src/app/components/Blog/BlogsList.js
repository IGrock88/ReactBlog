import React from 'react';
import BlogService from "../../services/BlogService";
import LoadingAnimation from "../global/LoadingAnimation";
import BlogItem from "./BlogItem";

export default class BlogsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            blogs: []
        };
    }

    componentDidMount(){
        let blogService = new BlogService();

        blogService.getBlogs((data)=> {
            this.setState({
                blogs: data
            })
        });
    }

    render() {
        if(!this.state.blogs.length){
            return <LoadingAnimation/>;
        }
        return <BlogItem blogs={this.state.blogs}/>;
    }

}