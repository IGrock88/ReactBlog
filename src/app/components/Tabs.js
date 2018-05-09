import React from 'react';
import Posts from "./Posts";
import News from "./News";

export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        const DEFAULT_ACTIVE_TAB = 0;

        this.state = {
            activeTab: DEFAULT_ACTIVE_TAB
        }

        this.switchTab = this.switchTab.bind(this);
    }

    switchTab(tab){
        this.setState({
            activeTab: tab.target.tabIndex
        });
    }

    render(){
        let tabs = this.props.data.tabs.map((tab, index) =>
            <li key={index} role="presentation"
                onClick={this.switchTab}
                className={this.state.activeTab == index ? 'active' : ''}>
                <a className='tab__control' tabIndex={index} href="#">{tab}</a></li>
        );
        return (
            <div className="panel panel-default">
                <ul className="nav nav-tabs">
                    {tabs}
                </ul>
                <Posts posts={this.props.data.posts} show={false}/>
                <News posts={this.props.data.posts} show={true}/>
            </div>
        )

    }
}