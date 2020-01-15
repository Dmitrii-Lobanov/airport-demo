import React, {  useState} from 'react';
import Options from './Options';

function Header() {
    const [isBackClicked, setIsBackClicked] = useState(false);

    function hasBackClicked() {
        setIsBackClicked(true);
    }

        return(
            isBackClicked
            ? <Options />
            : (<>
                <button onClick={() => hasBackClicked()} className="btn-back">Back</button>
            </>)
            
        )
}

export default Header;