import React, { useState } from 'react';
import Options from './Options';

function Maps() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

    if(!isBackClicked) {
        return(
            <>
                <button onClick={() => hasBackClicked()}>Back</button>
                <div>Maps should be here</div>
            </>
        );
    } else {
        return (
            <Options />
        )
    }
}

export default Maps;