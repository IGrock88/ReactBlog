import React from 'react';
import Posts from "./Posts";
import News from "./News";

export default class Tabs extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            activeTab: 1
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(tab){
        console.log(tab.target.tabIndex);
        this.setState({
            activeTab: tab.target.tabIndex
        });
        console.log(this.state.activeTab);
    }

    render(){
        console.log(this.props);
        return (
            <div className="panel panel-default">
                <ul className="nav nav-tabs">
                    <li role="presentation"
                        onClick={this.switchTab}
                        className={this.state.activeTab == 1 ? 'active' : ''}>
                        <a className='tab__control' tabIndex={1} href="#">Blog</a></li>
                    <li role="presentation"
                        onClick={this.switchTab}
                        className={this.state.activeTab == 2 ? 'active' : ''}>
                        <a className='tab__control' tabIndex={2} href="#">News</a></li>
                </ul>
                <Posts posts={this.props.data.posts} show={false}/>
                <News posts={this.props.data.posts} show={true}/>
            </div>
        )

    }
}