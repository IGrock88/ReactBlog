import React from 'react';

export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }

    }



    render(){
        if(!this.props.show) {
            return null;
        }

        let posts = this.state.posts.map((post, index) =>
            <div className='post' key={index}>
                <h4><a href={'/post/' + post.id}>{post.title}</a></h4>
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