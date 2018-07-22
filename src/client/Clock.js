import React, { Component } from "react";

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <div>
                <h1>Yo</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
    componentDidMount(){
        console.log('mount clock');
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        console.log('unmount clock');
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

}
/*
import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };
    }

    componentDidMount() {
        fetch("/api/getUsername")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    render() {
        return (
            <div>
                {this.state.username ? (
                    <h1>Hello {this.state.username}</h1>
                ) : (
                    <h1>Loading 2.. please wait!</h1>
                )}
                <img src={ReactImage} alt="react" />
            </div>
        );
    }
}*/