import React from 'react';
import {Link} from "react-router";
import QuickPostText from "./QuickPostText";

export default class PostItem extends React.Component {

    constructor(props){
        super(props);
        // на каждый пост нужно навесить отдельный флаг
        this.state = {
            showDetails: new Array(this.props.posts.length).fill(false)
        }

        this.toggleQuickText = this.toggleQuickText.bind(this);
    }

    toggleQuickText(event){
        let newDetailsArray = this.state.showDetails;
        newDetailsArray[event.target.tabIndex] = !this.state.showDetails[event.target.tabIndex];

        this.setState({
            showDetails: newDetailsArray
        });
    }

    render() {
        let posts = this.props.posts.map((post, index) =>
            <div  className="panel panel-default" key={index}>
                <div className="panel-heading">
                    <h4 className='post__header'><Link to={'/blog/post/' + post.id}>{post.title} </Link></h4>
                    <a className="label label-primary"
                       tabIndex={index}
                       onClick={this.toggleQuickText}>
                        {this.state.showDetails[index] ? "Hide" : "Quick view"}
                    </a>
                </div>
                <QuickPostText text={post.body} show={this.state.showDetails[index]}/>
            </div>
        );
        return (
            <div className='panel-body'>{posts}</div>
        );
    }
}