import React, { Component } from 'react'
import {
    Navbar,
    Container,
} from "react-bootstrap";
export class NavBarCustom extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        User data
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavBarCustom
