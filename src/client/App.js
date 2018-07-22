import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Main from './Main';

const Header = ()=>(
    <Header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/upload'>Upload</Link>
                </li>
            </ul>
        </nav>
    </Header>
)

export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}