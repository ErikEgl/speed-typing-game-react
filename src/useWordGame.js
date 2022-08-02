import { useState, useEffect, useRef } from "react";

function useWordGame() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [wordsNum, setWordsNum] = useState(0);
  const [typeData, setTypeData] = useState({
    textareaValue: "",
  });
  const textAreaRef = useRef(null);

  const STARTING_TIME = 10;

  const [remainingTime, setRemainingTime] = useState(STARTING_TIME);

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
            textareaValue: "",
          };
        });
        return;
      }
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
  }, [remainingTime, isGameStarted]);

  function countWords(str) {
    const arr = str.trim().split(" ");
    return arr.filter((word) => word !== "").length;
  }

  function handleClick() {
    setIsGameStarted(true);
    textAreaRef.current.disabled = false; //unfortunately without that hack focus is not applying to the textarea
    textAreaRef.current.focus();
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

  return [
    textAreaRef,
    isGameStarted,
    handleChange,
    typeData,
    remainingTime,
    handleClick,
    wordsNum,
  ];
}

export default useWordGame;
