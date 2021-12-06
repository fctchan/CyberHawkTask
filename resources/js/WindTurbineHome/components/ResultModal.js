import React from "react";
import {Button} from 'react-bootstrap';
import GetResult from './modalcomponents/GetResult';
import { ShowResultModal } from "./modalcomponents/ShowResultModal";

function ResultModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>  
            <span>
                <Button variant="outline-secondary" onClick={ () => { setModalShow(true); GetResult();}}>
                    Show All
                </Button>
            </span>

            <ShowResultModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}
  
export default ResultModal;