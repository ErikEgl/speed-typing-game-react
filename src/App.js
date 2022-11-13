import React from "react";
import { useContext } from "react";
import { UserContext } from "./useContext";
import Quote from "./components/Quote/Quote";
import Speed from "./components/Speed/Speed";

function App() {
  const {
    textAreaRef,
    isGameStarted,
    handleChange,
    typeData,
    remainingTime,
    handleClick,
    wordsNum,
    quoteData,
  } = useContext(UserContext);
  return (
    <>
      {quoteData.content ? (
        <>
          <h1>How fast do you type?</h1>
          <br />
          <p className="quote">
            <Quote />
          </p>
          <textarea
            ref={textAreaRef}
            disabled={!isGameStarted}
            name="textareaValue"
            onChange={handleChange}
            value={typeData.textareaValue}
            placeholder={`Welcome to Speed Typing Game! Click on START button and start typing ${quoteData?.author}${quoteData?.author.slice(-1) === "s" ? "'" : "'s"} quote immediately!`}
          />
          <h4>Time remaining: {remainingTime}</h4>
          <button disabled={isGameStarted} onClick={handleClick}>
            Start
          </button>
          <h1>Word count: {wordsNum}</h1>
          <Speed />
        </>
      ) : <h1>Refresh the page</h1>}
    </>
  );
}

export default App;
