import { useContext } from "react";
import { UserContext } from "../../useContext";

function Speed() {
    const { wordsNum, startingTime } = useContext(UserContext);
    if(wordsNum !== 0 && startingTime !== 0) {
        const wpm = wordsNum / (startingTime / 60)
        return ( 
            <>wpm: {Math.round(wpm)}</>
         );
    }
    return null;
}

export default Speed;