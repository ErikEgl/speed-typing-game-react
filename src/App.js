import React from "react";
import { useContext } from "react";
import { UserContext } from "./useContext";
import Quote from "./components/Quote/Quote";
import Speed from "./components/Speed/Speed";
import Time from "./components/Time/Time";


function App() {
  const {
    textAreaRef,
    isGameStarted,
    handleChange,
    typeData,
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
          <Time />
          <h1>Word count: {wordsNum}</h1>
          <Speed />
        </>
      ) : <h1>Refresh the page</h1>}
    </>
  );
}

export default App;
