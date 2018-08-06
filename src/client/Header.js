import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Nav from "./util/Nav";


export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header>
                <Nav/>
            </header>
        )
    }
}