import React, { useEffect, useRef } from "react";
import mainLogic from "./customHook";

/**
 * Challenge:
 * 
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 * 
 * You can easily tell which parts the component needs by looking at 
 * the variables being used inside the `return`ed markup below.
 */


function App() {

  const [textAreaRef, isGameStarted, handleChange, typeData, remainingTime, handleClick, wordsNum] = mainLogic()
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


