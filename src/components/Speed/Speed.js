import { useContext } from "react";
import { UserContext } from "../../useContext";

function Speed() {
    const { wordsNum, STARTING_TIME } = useContext(UserContext);
    if(wordsNum !== 0 && STARTING_TIME !== 0) {
        const wpm = wordsNum / (STARTING_TIME / 60)
        return ( 
            <>wpm: {Math.round(wpm)}</>
         );
    }
    return null;
}

export default Speed;