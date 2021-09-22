import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
export class SpecialContent extends Component {
    render() {
        return (
            <div>
            <h1>Special content</h1>
            </div>
        )
    }
}

export default withAuth0(SpecialContent)
