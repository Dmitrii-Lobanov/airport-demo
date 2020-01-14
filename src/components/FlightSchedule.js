import React, { useState } from 'react';
import Options from './Options.js';
import data from '../data/data.json';

function FlightScheduleContainer() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    if(!isBackClicked){
        return (
            <>
            <div>
                <button onClick={() => hasBackClicked()}>Back</button>
                <h1>Demo International Airport</h1>
                <div>Language choosing div</div>
            </div>
            <div>
                <button>Departures</button>
                <button>Arrivals</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Flight</th>
                            <th>Airport</th>
                            <th>Arrival Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.flight}</td>
                                    <td>{item.airport}</td>
                            <td>{item.arrivalTime}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        );
    } else {
        return (
            <Options />
        );
    }
    
}

export default FlightScheduleContainer;