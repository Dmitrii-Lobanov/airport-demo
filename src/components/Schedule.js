import React, { useState } from 'react';
//import data from '../data/data.json';
import '../App.css';
import Options from './Options';
import { ScheduleFilters } from "../store/actions/actionTypes";

function Schedule({data, onClick}){

    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    //console.log(data);

    if(!isBackClicked) {
        return (
            <React.Fragment>            
                <div className="header">
                        <button onClick={() => hasBackClicked()} className="btn-back">Back</button>
                        <h1>Demo International Airport</h1>
                        <button>Lang</button>
                </div>
                <div className="btn-flight-container">
                    <button className="btn-flight" filter={ScheduleFilters.SHOW_DEPARTURES}>Departures</button>
                    <button className="btn-flight" filter={ScheduleFilters.SHOW_ARRIVALS}>Arrivals</button>
                </div>
                {<div className="table-container">
                    <table>
                        <thead>
                            <tr className="table-row">
                                <th>Flight</th>
                                <th>Airport</th>
                                <th>Arrival Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.flight} className="table-row">
                                        <td>{item.flight}</td>
                                        <td>{item.airport}</td>
                                        <td>{item.arrivalTime}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>}
            </React.Fragment>
        )
    } else {
        return (
            <Options />
        )
    }

}
    

    
export default Schedule;