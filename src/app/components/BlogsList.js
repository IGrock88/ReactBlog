import React from 'react';
import BlogService from "../services/BlogService";

export default class BlogsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            blogs: []
        };

        let blogServ = new BlogService();

        blogServ.getBlogs((data)=> {
            this.setState({
                blogs: data
            })
        });
    }

    render() {
        if(!this.state.blogs.length){
            return null;
        }
        let blogs = this.state.blogs.map((blog, index) =>
            <div key={index}>{blog.title}</div>
        );
        return (
            <div>
                {blogs}
            </div>
        );
    }

}