import React from 'react';
import PostItem from "./PostItem";

export default class PostList extends React.Component {

    render() {

        return (
            <div className="panel panel-primary">
                <div className='panel-heading' >Posts</div>
                <PostItem posts={this.props.posts}/>

            </div>
        );
    }

}