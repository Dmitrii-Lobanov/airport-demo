import React, { useState } from 'react';
import Options from './Options';
import '../App.css';

function ScanTicket() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    if(!isBackClicked) {
        return (
            <div>
                <div className="header">
                    <button onClick={() => hasBackClicked()} className="btn-back">Back</button>
                    <h1>Demo International Airport</h1>
                    <button>Lang</button>
                </div>
                <div>
                    <p className="content">Scan your ticket</p>
                </div>
            </div>
       )    
    } else {
        return (
            <Options />
        )
    }
    
}

export default ScanTicket;