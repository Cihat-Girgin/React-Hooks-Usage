import React  from 'react'
import {Col, Row} from "react-bootstrap";
import FunctionalComponent from "../Hooks/functionalComponent";
import ClassComponent from "../Hooks/classComponent";

const hookTest = () => {
   
    return(
        <Row>
            <Col md={6}>
        <FunctionalComponent/>
            </Col>
            <Col md={6}>
        <ClassComponent/>
            </Col>
        </Row>
    )
}

export default hookTest;