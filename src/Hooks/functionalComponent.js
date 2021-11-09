import React, {useState, useEffect} from 'react'
import {Badge, Button, Col, Row} from "react-bootstrap";

const FunctionalComponent = () => {
    const [counter, setCounter] = useState(0);
    const [timer,setTimer] = useState(0);
    const increase = () => {
        setCounter(counter + 1)
    }
    useEffect(()=>{
       const myTimer = setInterval(()=>{
           setTimer(timer =>timer +1 );
       },1000) ;
       return () =>{ clearInterval(myTimer);}
    },[])
    useEffect(()=>{
        console.log(timer)
    },[timer])
    // useEffect(()=>{
    //     console.log(`Functional Component didUpdate`)
    // },[counter])
    // useEffect(()=>{
    //     console.log(`Functional Component didMount`)
    // },[])
    return(
        <Row>
            <Col md={12} style={{height: '300px',backgroundColor:"aliceblue"}} className="text-center">
                <h4>Functional Component</h4>
                <Button variant="primary" className="mt-3" onClick={()=>{increase()}}>Increse</Button>
                <span> </span>
                <br/>
                <h3 className="mt-5">
                    <Badge bg="secondary">Count {counter}</Badge>
                </h3>
            </Col>
        </Row>
    )
}

export default FunctionalComponent;
