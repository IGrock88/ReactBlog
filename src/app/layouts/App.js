import React from 'react';
import Header from "../components/Header";
import Login from "../components/Login";
import MainContent from "../components/MainContent";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

export default class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header menuItems={this.props.data.menuItems}/>
                <Login/>
                <div className="row marketing">
                    <MainContent data={this.props.data}/>
                    <Aside menuItems={this.props.data.menuItems}/>
                </div>
                <Footer/>
            </div>
        )
    }
}