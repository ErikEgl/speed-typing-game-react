import React from "react";
import useWordGame from "./useWordGame";



function App() {

  const [textAreaRef, isGameStarted, handleChange, typeData, remainingTime, handleClick, wordsNum] = useWordGame()
  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!isGameStarted}
        name="textareaValue"
        onChange={handleChange}
        value={typeData.textareaValue}
      />
      <h4>Time remaining: {remainingTime}</h4>
      <button disabled={isGameStarted} onClick={handleClick}>Start</button>
      <h1>Word count: {wordsNum}</h1>
    </>
  );
}

export default App;


