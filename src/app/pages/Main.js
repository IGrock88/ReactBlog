import React from 'react';
import Tabs from "../components/Main/Tabs";
import Jumbotron from "../components/global/Jumbotron";
import {Link} from 'react-router';

export default class MainContent extends React.Component {

    render() {

        return (
            <main>

            <Jumbotron/>
            <section className="col-lg-8 left-col">
                <Tabs />
            </section>
            </main>
        );
    }

}