import React from 'react';
import BlogItem from "./BlogItem";
import BlogService from "../../services/BlogService";
import LoadingAnimation from "../global/LoadingAnimation";
import PostList from "./PostList";

export default class SingleBlogLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            blog: [],
            posts: []
        }
    }

    componentWillMount(){
        this.getBlogData();
    }

    getBlogData(){
        let blogService = new BlogService();

        blogService.getOneBlog(this.props.idBlog, (data)=> {
            this.setState({
                blog: data
            })
        });

        blogService.getPostsByBlogId(this.props.idBlog, (data) => {
            this.setState({
                posts: data
            })
        })
    }



    render() {
        if(!this.state.blog.length || !this.state.posts.length) return <LoadingAnimation/>;

        return (
            <div>
                <BlogItem blogs={this.state.blog}/>
                <PostList posts={this.state.posts}/>
            </div>
        );
    }
}