import React from 'react';

export default class Posts extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        if(!this.props.show) {
            return null;
        }

        let posts = this.props.posts.map((post, index) =>
            <div className='post' key={index}>
                <h4><a href={'/post/' + post.id}>{post.title} Test</a></h4>
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