import React from 'react';
import Tab from "./Tab";
import axios from "axios/index";



export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        const DEFAULT_ACTIVE_TAB = 0;
        this.urlTypes = ['/post/', '/new/'];
        this.articles;


        this.state = {
            activeTab: DEFAULT_ACTIVE_TAB
        };

        this.switchTab = this.switchTab.bind(this);
    }
    switchTab(event){
        let tabIndex = event.target.tabIndex;
        if(this.state.activeTab !== tabIndex) this.setState({activeTab: tabIndex});
    }

    render(){
        console.log(this.props);
        let tabControls = this.props.data.tabs.map((tab, index) =>
            <li key={index} role="presentation"
                onClick={this.switchTab}
                className={this.state.activeTab === index ? 'active' : ''}>
                <a className='tab__control' tabIndex={index} href="#">{tab.title}</a></li>
        );
        return (
            <div className="panel panel-default">
                <ul className="nav nav-tabs">
                    {tabControls}
                </ul>
                <Tab activeTab={this.state.activeTab}/>
            </div>
        )

    }
}