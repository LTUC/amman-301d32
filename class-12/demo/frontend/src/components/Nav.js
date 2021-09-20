import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/first">First</Link></li>
                    <li><Link to="/second">Second</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
