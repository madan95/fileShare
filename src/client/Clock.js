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