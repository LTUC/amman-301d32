import React, { Component } from 'react'
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';

class User extends Component {

    getHandleOpen=()=>{
        let name=this.props.name;
        let title=this.props.title;
        this.props.handleOpen(name,title);
    }
    render() {
        return (
            <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0RAllozh2bKCwPOYa6fqlTm7nSkGG_rFvQ1PKbMyOFqbySD76m6wslx1zryADjqgj_E&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.title}
                            <br />
                            age:{this.props.age}
                        </Card.Text>
                        <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
           
        </>
        )

    }
}

export default User
