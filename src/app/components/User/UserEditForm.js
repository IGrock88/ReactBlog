import React from 'react';


export default class UserEditForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            username: this.props.user.username,
            name: this.props.user.email,
            website: this.props.user.website,
            phone: this.props.user.phone
        }
    }

    handleChange = (event) => {
        const FIELD = {
            email: 'edit__email',
            username: 'edit__login',
            name: 'edit__fullname',
            website: 'edit__website',
            phone: 'edit__phone'
        };
        switch (event.target.id){
            case FIELD.email:
                this.setState({email: event.target.value});
                break;
            case FIELD.username:
                this.setState({username: event.target.value});
                break;
            case FIELD.name:
                this.setState({name: event.target.value});
                break;
            case FIELD.website:
                this.setState({website: event.target.value});
                break;
            case FIELD:
                this.setState({phone: event.target.value});
                break;
            default:
                console.log('ERROR', event.target);
        }
    };

    render() {

        if(!this.props.show) return null;

        return (
            <div className='panel'>
                <div className="input-group">
                    <span className="input-group-addon">Email</span>
                    <input id='edit__email' type="email" className="form-control" placeholder="Email"
                           value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Login</span>
                    <input id='edit__login' type="text" className="form-control" placeholder="Login"
                           value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Full name</span>
                    <input id='edit__fullname' type="text" className="form-control" placeholder="Full name"
                           value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Website</span>
                    <input id='edit__website' type="text" className="form-control" placeholder="Website"
                           value={this.state.website} onChange={this.handleChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Phone</span>
                    <input id='edit_phone' type="text" className="form-control" placeholder="Phone"
                           value={this.state.phone} onChange={this.handleChange}/>
                </div>
                <div><button className='btn btn-success'>Save</button></div>
            </div>
        );
    }
}