import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

class Nav extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul className="header">
                    <li>
                        <NavLink exact to="/" >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/upload">
                            Upload
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/downloadlist">
                            Download List
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;