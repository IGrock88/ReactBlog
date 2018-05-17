import React from 'react';



export default class UserItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="thumbnail" >
                <div className="caption">
                    <h3>Login: {this.props.user.username}</h3>
                    <p>Full name: {this.props.name}</p>
                    <p>
                        <a href="#" className="btn btn-primary" role="button">Profile</a>

                        <button tabIndex={this.props.user.id} onClick={this.props.deleteUser} className="btn btn-danger"
                                role="button">Delete user
                        </button>
                        <button tabIndex={this.props.user.id} onClick={this.props.deleteUser} className="btn btn-danger"
                                role="button">Edit user
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}