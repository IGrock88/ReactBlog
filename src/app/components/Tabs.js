import React from 'react';
import Tab from "./Tab";
import axios from "axios/index";



export default class Tabs extends React.Component{
    constructor(props){
        super(props);
        const DEFAULT_ACTIVE_TAB = 0;
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
        let tabControls = this.props.data.tabs.map((tab, index) =>
            <li key={index} role="presentation"
                onClick={this.switchTab}
                className={this.state.activeTab === index ? 'active' : null}>
                <a className='tab__control' tabIndex={index} >{tab.title}</a></li>
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