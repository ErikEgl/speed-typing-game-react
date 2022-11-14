import { useContext } from "react";
import { UserContext } from "../../useContext";

function Speed() {
    const { wordsNum, remainingTime } = useContext(UserContext);
    if(wordsNum !== 0 && remainingTime !== 0) {
        const wpm = wordsNum / (remainingTime / 60)
        return ( 
            <>wpm: {Math.round(wpm)}</>
         );
    }
    return null;
}

export default Speed;