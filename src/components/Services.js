import React, { useState } from 'react';
import Options from './Options';
import '../App.css';

function Services() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    if(!isBackClicked) {
        return(
            <>
                <div className="header">
                    <button onClick={() => hasBackClicked()} className="btn-back">Back</button>
                    <h1>Demo International Airport</h1>
                    <button>Lang</button>
                </div>
                <div className="content">Services should be here</div>
            </>
        );
    } else {
        return (
            <Options />
        )
    }
}

export default Services;