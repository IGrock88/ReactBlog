import React from 'react';
import Header from "../components/Header";
import Login from "../components/Login";
import MainContent from "../components/MainContent";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({
            isOpen: false
        })
    }

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
                <Modal show={this.state.isOpen}
                       onClose={this.closeModal}
                       modalTitle={"Welcome"}>
                    <div className="input-group login">
                        <h1>Здравствуй, гость. Вы зашли на React Blog</h1>
                    </div>
                </Modal>
             </div>
        )
    }
}