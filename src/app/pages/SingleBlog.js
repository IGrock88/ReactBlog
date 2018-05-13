import React from 'react';
import SingleBlogBody from "../components/SingleBlogBody";

export default class SingleBlog extends React.Component{

    render(){
        console.log(this.props);

        return <div className='col-lg-8 panel'>
            <SingleBlogBody idBlog={this.props.params.idBlog}/></div>;
    }
}