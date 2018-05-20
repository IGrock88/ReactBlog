import React from 'react';
import BlogItem from "./BlogItem";
import BlogService from "../../services/BlogService";
import LoadingAnimation from "../global/LoadingAnimation";
import PostList from "./PostList";
import {fetchPosts} from "../../actions/postsActions";
import {connect} from "react-redux";

class SingleBlogLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            blog: [],
            posts: []
        }
        let params = {idBlog: this.props.idBlog};
        this.props.dispatch(fetchPosts(this.props.idBlog));
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
    }



    render() {
        if(!this.state.blog.length) return <LoadingAnimation/>;

        return (
            <div>
                <BlogItem blogs={this.state.blog}/>
                {this.props.is_fetching ? <LoadingAnimation/> :  <PostList posts={this.props.posts}/>}
             </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_fetching: store.posts.is_fetching
    };
}

export default connect(mapStateToProps)(SingleBlogLayout);