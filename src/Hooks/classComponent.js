import React, {Component} from "react"
import {Badge, Button, Col, Row} from "react-bootstrap";
import FunctionalComponent from "./functionalComponent";

class ClassComponent extends Component {
    state = {
        counter: 0
    }
    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    componentWillMount() {
    alert(5)
    }

    componentDidMount() {
        console.log(`Class component didMount`)
    }
    componentDidUpdate()  {
        console.log(`Class component didUpdated`)
    }

    render() {
        return (
            <Row>
                <Col md={12} style={{height: '300px',backgroundColor:"antiquewhite"}} className="text-center">
                    <h4>Class Component</h4>
                    <Button variant="success" className="mt-3" onClick={()=>{this.increase()}}>Increse</Button>
                    <span> </span>
                    
                    <h3 className="mt-5">
                        <Badge bg="secondary">Count {this.state.counter}</Badge>
                    </h3>
                </Col>
            </Row>
        )
    }
}

export default ClassComponent;