import React from 'react';
import BlogService from "../services/BlogService";
import LoadingAjax from "./LoadingAjax";
import {Link} from "react-router";

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
            return <LoadingAjax/>;
        }
        let blogs = this.state.blogs.map((blog, index) =>
            <div className="thumbnail" key={index}>
                <div className="caption">
                    <h3>{blog.title}</h3>
                    <p>{blog.author}</p>
                    <p><Link to={"users/show/" + blog.idUser} className="btn btn-primary" role="button">Show Author</Link> <Link to="#" className="btn btn-default" role="button">Read Blog</Link>
                    </p>
                </div>
            </div>
        );
        return (
            <div>
                {blogs}
            </div>
        );
    }

}