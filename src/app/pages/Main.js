import React from 'react';
import Tabs from "../components/Main/Tabs";
import Login from "../components/global/Login";
import {Link} from 'react-router';

export default class MainContent extends React.Component {

    render() {

        return (
            <main>

            <Login/>
            <section className="col-lg-8 left-col">
                <Tabs />
            </section>
            </main>
        );
    }

}