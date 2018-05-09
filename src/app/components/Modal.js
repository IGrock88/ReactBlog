import React from 'react';

export default class Modal extends React.Component {
    render() {

        if(!this.props.show) {
            return null;
        }

        const backdropStyle = {


        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30

        };

        return (
            <div className="backdrop">
                <div className="LoginModal" style={modalStyle}>

                    <div className="login__header">

                        <button className="close" onClick={this.props.onClose}>
                            X
                        </button>
                        <h4 className="modal-title" id="mySmallModalLabel">{this.props.modalTitle}</h4>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
