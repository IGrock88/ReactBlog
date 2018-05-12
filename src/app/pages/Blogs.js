import React from 'react';
import BlogService from "../services/BlogService";
import BlogsList from "../components/BlogsList";

export default class Blogs extends React.Component {

    render() {

        return (
            <main className="col-lg-8 left-col">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <BlogsList />
                    </div>
                </div>
            </main>
        );
    }

}