import React from 'react';
import MainMenu from "./MainMenu";
import Search from "./Search";


export default class Header extends React.Component {

    render() {
        return (
            <header className="header clearfix">
                <MainMenu menuItems={this.props.menuItems}/>
                <h3 className="text-muted mainTitle">Igor Korobeynikov React Blog</h3>
                <Search/>
            </header>
        );
    }

}