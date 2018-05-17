import React from 'react';
import UsersStore from '../../stores/UsersStore';
import {editUserAction, fetchUser, deleteUserAction} from "../../actions/usersActions";
import LoadingAnimation from "../global/LoadingAnimation";
import UserItem from "./UserItem";


export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    // newUser()
    // {
    //     console.log("Coments New");
    //     let body = 'Новый комментарий';
    //     let userId = 1;
    //     let title = 'Название комментария';
    //     addUser(title, userId, body);
    // }

    onUserChange = (users) => {
        this.setState({
            users: users
        });
    };

    deleteUser = (event) => {
        deleteUserAction(event.target.tabIndex);
    };

    editUser = (event) => {
        editUserAction(event.target.tabIndex);
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
                {users}
            </div>
        );
    }
}