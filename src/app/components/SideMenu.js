import React from 'react';
import {Link} from 'react-router';

export default class SideMenu extends React.Component {

    render() {
        let items = this.props.menuItems.map((item, index) =>
            <Link key={index} className="list-group-item" to={item.link}>{item.text}</Link>);
        return <div className="list-group">{items}</div>;
    }

}