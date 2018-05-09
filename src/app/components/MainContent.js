import React from 'react';
import Tabs from "./Tabs";

export default class MainContent extends React.Component {

    render() {

        return (
            <main className="col-lg-8 left-col">
                <Tabs data={this.props.data}/>
            </main>
        );
    }

}