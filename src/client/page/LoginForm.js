import React, { Component } from "react";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            }
        );
    }

    handleSubmit(e){
        alert('Thankyou for Logining in Email:' + this.state.email + ' and password: ' + this.state.password );
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                </label>
                <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <br />
                <label>
                    Password:
                </label>
                <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        )
    }
}