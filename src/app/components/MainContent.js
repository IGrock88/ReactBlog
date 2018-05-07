import React from 'react';

export default class MainContent extends React.Component {

    render() {
        let posts = this.props.posts.map((post, index) =>
            <div key={index}>
                <h4><a href={'/post/' + post.id}>{post.title}</a></h4>
                <p>{post.text}</p>
            </div>
        );
        return (
            <main className="col-lg-8 left-col">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {posts}
                    </div>
                </div>
            </main>
        );
    }

}