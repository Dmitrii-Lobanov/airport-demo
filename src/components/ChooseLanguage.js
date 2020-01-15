import React, {useState} from 'react';
import Options from './Options';
import '../App.css';

function ChooseLanguage({store}, hasClicked) {  
    const [isClicked, setIsClicked] = useState(false);

    function hasClicked() {
        setIsClicked(true);
    }
    
    if(!isClicked) {
        return (
            <div className="choose-lang-container">
                <button onClick={() => hasClicked()} className="btn">Russian</button>
                <button onClick={() => hasClicked()} className="btn">English</button>
            </div>
        )
    } else {
        return <Options />
    }
}

export default ChooseLanguage;