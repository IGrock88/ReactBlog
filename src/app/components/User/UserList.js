import React from 'react';
import UsersStore from '../../stores/UsersStore';
import {addUser, fetchUser} from "../../actions/usersActions";
import LoadingAnimation from "../global/LoadingAnimation";
import UserService from "../../services/UserService";


export default class UserList extends React.Component {

    constructor(props){
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
    //     addComment(title, userId, body);
    // }

    onUserChange = (users) =>
    {
        console.log("Coments Change");
        this.setState({
            users: users
        });
    };

    componentWillMount()
    {
        UsersStore.on('change', this.onUserChange);
    }

    componentDidMount()
    {
        fetchUser();
    }

    componentWillUnmount(){
        UsersStore.removeListener('change', this.onUserChange);
    }


    render() {
        if(!this.state.users.length) return <LoadingAnimation/>;


        let users = this.state.users.map((user, index) =>
            <div className="thumbnail" key={index}>
                    <div className="caption">
                        <h3>Login: {user.username}</h3>
                        <p>Full name: {user.name}</p>
                        <p>
                            <a href="#" className="btn btn-primary" role="button">Profile</a>
                            <a href="#" className="btn btn-default" role="button">Blogs</a>
                            <a href="#" className="btn btn-default" role="button">Posts</a>
                            <a href="#" className="btn btn-default" role="button">Comments</a>
                        </p>
                    </div>
            </div>
         );

        return (
            <div>
                {users}
            </div>
        );
    }
}