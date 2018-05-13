import React from 'react';
import {Link} from 'react-router';

export default class PostList extends React.Component {

    render() {
        let posts = this.props.posts.map((post, index) =>
            <div className="panel panel-default" key={index}>

                <div className="panel-heading">
                    <h4 className='post__header'><Link to={'/blog/post/' + post.id}>{post.title} </Link></h4>
                    <button className="label label-primary">Quick view</button>
                </div>
                <div className="">
                    {/*TODO: реализовать раскрывающийся компопнент с текстом поста*/}
                </div>
            </div>
        );
        return (
            <div className="panel panel-primary">
                <div className='panel-heading'>Posts</div>
                <div className='panel-body'>{posts}</div>
            </div>
        );
    }

}