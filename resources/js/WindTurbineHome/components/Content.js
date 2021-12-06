import React from "react";
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultModal from './ResultModal';

const Content = () =>{
    return (
        <Card className="text-center">
            <Card.Header><h3><b>Wind Turbine</b></h3></Card.Header>
            <Card.Body>
                <Card.Title>Select your own method</Card.Title>
                <Card.Text>
                </Card.Text>
                <ResultModal />
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    );  
};

export default Content;