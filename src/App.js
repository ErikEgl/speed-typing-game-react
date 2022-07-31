import React, { useEffect, useRef } from "react";

function App() {

  const textAreaRef = useRef(null)

  const [typeData, setTypeData] = React.useState({
    textareaValue: "",
  });

  const STARTING_TIME = 10;


  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [remainingTime, setRemainingTime] = React.useState(STARTING_TIME);
  const [wordsNum, setWordsNum] = React.useState(0);
  

  function countWords(str) {
    const arr = str.trim().split(" ");
    return arr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (!isGameStarted) return;
    setTimeout(() => {
      if (remainingTime === 0) {
        setIsGameStarted(false);
        setRemainingTime(STARTING_TIME);
        setWordsNum(countWords(typeData.textareaValue));
        setTypeData((prevData) => {
          return {
            ...prevData,
            textareaValue: '',
          };
        });
        return;
      }
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
  }, [remainingTime, isGameStarted]);

  function handleClick() {
    setIsGameStarted(true);
    textAreaRef.current.disabled = false //unfortunately without that hack focus is not applying to the textarea
    textAreaRef.current.focus() 
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTypeData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
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
