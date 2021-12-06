import React from "react";
import { Button, Modal } from 'react-bootstrap';
import GetResult from './GetResult';

export function ShowResultModal(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered>
            <Modal.Header closeButton>
                <Modal.Title >
                    <h3><span  id="modal_title">Wind Turbine Result</span></h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <GetResult />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}