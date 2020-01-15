import React, { useState } from 'react';
import Options from './Options';
import '../App.css';

function Maps() {
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
                <div className="content">Maps should be here</div>
            </>
        );
    } else {
        return (
            <Options />
        )
    }
}

export default Maps;