import React from 'react';

export default class SideMenu extends React.Component {

    render() {
        let items = this.props.menuItems.map((item, index) => <a key={index} className="list-group-item" href={item.link}>{item.text}</a>);
        return <div className="list-group">{items}</div>;
    }

}