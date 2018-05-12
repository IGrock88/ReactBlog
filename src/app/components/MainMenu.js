import React from 'react';
import {Link} from 'react-router';

export default class MainMenu extends React.Component {

    constructor(props){
        super(props);
        this.menuItems = [{link: '/', text: 'Home'},
            {link: 'blog', text: 'Blog'}, {link: 'comments', text: 'Comments'}, {link: 'users', text: 'Users'}];


    }


    isActive(href)
    {
        return window.location.pathname === href;
    }

    render() {
        console.log(window.location.pathname);
        let items = this.menuItems.map((item, index) =>
            <li role="presentation" key={index}><Link to={item.link}>{item.text}</Link></li>
        );
        return (
            <nav>
                <ul className="nav nav-pills pull-right">{items}</ul>
            </nav>
        );
    }
}