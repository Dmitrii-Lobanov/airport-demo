import React, { useState } from 'react';
import FlightSchedule from './FlightSchedule';
import ScanTicket from './ScanTicket';
import Maps from './Maps';
import Services from './Services';

function Options() {
    const [isScheduleClicked, setIsScheduleClicked] = useState(false);
    const [isScanClicked, setIsScanClicked] = useState(false);
    const [isMapsClicked, setIsMapsClicked] = useState(false);
    const [isServicesClicked, setIsServicesClicked] = useState(false);

    function hasScheduleClicked() {
        setIsScheduleClicked(true);
    }

    function hasScanClicked() {
        setIsScanClicked(true);
    }

    function hasMapsClicked() {
        setIsMapsClicked(true);
    }

    function hasServicesClicked() {
        setIsServicesClicked(true);
    }

    if(isScheduleClicked) {
        return (
            <FlightSchedule />
        );
        
    } else if(isScanClicked) {
        return (
            <ScanTicket />
        );
    } else if(isMapsClicked) {
        return (
            <Maps />
        )
    } else if(isServicesClicked) {
        return (
            <Services />
        )
    } else {
        return (
            <div>
                <h1>
                    Demo International Airport
                    </h1>
                <button>Language choosing div</button>
                <div>
                    <button onClick={() => hasScheduleClicked()}>Flight Schedule</button>
                    <button onClick={() => hasScanClicked()}>Scan your ticket</button>
                    <button onClick={() => hasMapsClicked()}>Maps</button>
                    <button onClick={() => hasServicesClicked()}>Services</button>
                </div>
            </div>
        );
    }
}

export default Options;