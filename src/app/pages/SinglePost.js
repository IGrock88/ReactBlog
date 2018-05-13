import React from 'react';

export default class SinglePost extends React.Component{

    render(){
        //TODO
        return <div className='col-lg-8 panel'>Test{this.props.params.idPost}</div>;
    }
}