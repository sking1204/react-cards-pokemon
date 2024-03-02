import {useState} from 'react';

const useFlip = (initialFlipState = true) =>{
    const [isFlipped,setFlippedState] = useState(initialFlipState);

    const toggleFlipState = () =>{
        setFlippedState(isFlipped => !isFlipped)
    }
    return [isFlipped, toggleFlipState]
    
}

export default useFlip;