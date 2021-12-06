import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';

const baseURL = "./api/windturbine";

function GetResult(){
    
    const [apiData, setApiData] = useState(null)
    
    useEffect(() => {
        axios.get(baseURL).then(data => setApiData(data.data))
    }, [])
    
    return (
        <div className="resultList">
            <Table responsive="sm" striped>
                <thead>
                    <tr>
                        <th>Wind Turbine Sequence</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData ? apiData.map(item => <><tr><td>{item.inputValue}</td><td> {item.value}</td></tr></>) : null}
                </tbody>
            </Table>
        </div>
    )
}

export default GetResult;