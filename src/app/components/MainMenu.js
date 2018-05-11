import React from 'react';
import {Link} from 'react-router';

export default class MainMenu extends React.Component {

    render() {
        let items = this.props.menuItems.map((item, index) =>
            <li role="presentation" key={index}><Link to={item.link}>{item.text}</Link></li>
        );
        return (
            <nav>
                <ul className="nav nav-pills pull-right">{items}</ul>
            </nav>
        );
    }
}