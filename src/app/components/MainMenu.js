import React from 'react';

export default class MainMenu extends React.Component {

    render() {
        let items = this.props.menuItems.map((item, index) => <li role="presentation" key={index}><a href={item.link}>{item.text}</a></li>);
        return (
            <nav>
                <ul className="nav nav-pills pull-right">{items}</ul>
            </nav>
        );
    }
}