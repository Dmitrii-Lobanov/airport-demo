import React, {useState} from 'react';
import Options from './Options';

function ChooseLanguage(hasClicked) {  
    const [isClicked, setIsClicked] = useState(false);

    function hasClicked() {
        setIsClicked(true);
        //console.log('Working');
        store.dispatch(goTo('Options'))
    }
    
    if(!isClicked) {
        return (
            <div>
                <button onClick={() => hasClicked()}>Russian</button>
                <button onClick={() => hasClicked()}>English</button>
            </div>
        )
    } else {
        return <Options />
    }
}

export default ChooseLanguage;