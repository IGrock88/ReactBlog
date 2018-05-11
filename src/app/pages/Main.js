import React from 'react';
import Tabs from "../components/Tabs";
import Login from "../components/Login";

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