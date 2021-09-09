import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class Student extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.student_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.background}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}

export default Student
