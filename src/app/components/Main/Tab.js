import React from 'react';
import News from "../global/News";
import Posts from "../Blog/Posts";

export default class Tab extends React.Component{

    render(){
        if(this.props.activeTab === 0) return <Posts/>;
        else if (this.props.activeTab === 1) return <News/>;
        else return null;
    }
}