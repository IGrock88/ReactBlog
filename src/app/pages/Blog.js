import React from 'react';

export default class Blog extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')

    }

    render() {
        return (
            <main className="col-lg-8 left-col">
                <div className="panel panel-danger">
                    <div className="panel-header">Posts</div>
                    <div className="panel-body">

                    </div>

                </div>
            </main>
        );
    }

}