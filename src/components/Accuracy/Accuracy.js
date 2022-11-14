import { useContext } from "react";
import { UserContext } from "../../useContext";

function Accuracy() {
  const { wordsNum, remainingTime, quoteValue, typeData } = useContext(UserContext);
  if (wordsNum !== 0 && remainingTime !== 0) {
    var accVal = [];
    quoteValue.map((char, i) => {
      if (char === typeData.textareaValue[i]) {
        accVal.push(char === typeData.textareaValue[i])
      }
    });
  }
  return (
    <>
      {accVal?.length > 0 ? <div>accuracy: {accVal.length && Math.round((accVal.length * 100) / typeData.textareaValue.length) }%</div> :  "" }
    </>
  );

}

export default Accuracy;
