import React, { useState } from 'react';
import Options from './Options';

function ScanTicket() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    if(!isBackClicked) {
        return (
            <div>
                <div>
                    <button onClick={() => hasBackClicked()}>Back</button>
                    <h1>Demo International Airport</h1>
                    <div>Language choosing div</div>
                </div>
                <div>
                    <p>Scan your ticket</p>
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