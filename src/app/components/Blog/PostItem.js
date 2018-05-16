import React from 'react';
import {Link} from "react-router";
import QuickPostText from "./QuickPostText";

export default class PostItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDetails: false
        }
    }

    toggleQuickText =(event) =>{
        this.setState({
            showDetails: !this.state.showDetails
        });
    };

    render() {
        return (
            <div  className="panel panel-default">
                <div className="panel-heading">
                    <h4 className='post__header'><Link to={'/blog/post/' + this.props.post.id}>{this.props.post.title} </Link></h4>
                    <a className="label label-primary"
                       onClick={this.toggleQuickText}>
                        {this.state.showDetails ? "Hide" : "Quick view"}
                    </a>
                </div>
                <QuickPostText text={this.props.post.body} show={this.state.showDetails}/>
            </div>
        );
    }
}