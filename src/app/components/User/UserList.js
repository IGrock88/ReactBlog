import React from 'react';
import UsersStore from '../../stores/UsersStore';
import {fetchUser} from "../../actions/usersActions";
import LoadingAnimation from "../global/LoadingAnimation";
import UserItem from "./UserItem";
import UserNew from "./UserNew";


export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpen: false
        }
    }

    toggleNewUser = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onUserChange = (users) => {
        this.setState({
            users: users
        });
    };

    componentWillMount() {
        UsersStore.on('change', this.onUserChange);
    }

    componentDidMount() {
        fetchUser();
    }

    componentWillUnmount() {
        UsersStore.removeListener('change', this.onUserChange);
    }


    render() {
        if (!this.state.users.length) return <LoadingAnimation/>;

        let users = this.state.users.map((user, index) =>
            <UserItem user={user} key={index} deleteUser={this.deleteUser} editUser={this.editUser}/>
        );

        return (
            <div>
                <button onClick={this.toggleNewUser}
                        className='btn-success btn'>{!this.state.isOpen ? "Add New User" : "Hide"}</button>
                <UserNew show={this.state.isOpen}/>
                {users}
            </div>
        );
    }
}