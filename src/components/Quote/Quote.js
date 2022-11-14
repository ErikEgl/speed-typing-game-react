import { useContext } from "react";
import { UserContext } from "../../useContext";
function Quote() {
  const { typeData, quoteValue } = useContext(UserContext);

  return (
    <>
      {quoteValue.map((char, i) => {
        return (
          <span key={i} aria-hidden="true" className={+(i < typeData.textareaValue.length) && (char === typeData.textareaValue[i] ? "correct" : "incorrect")}>
            {char}
          </span>
        );
      })}
    </>
  );
}

export default Quote;
