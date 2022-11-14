import { useState, useEffect, useRef, createContext } from "react";
const UserContext = createContext();

const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random?minLength=100&maxLength=140';


function AppContextProvider(props) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [wordsNum, setWordsNum] = useState(0);
  const [quoteData, setQuoteData] = useState("Text for typing");
  const [startingTime, setStartingTime] = useState(5);
  const quoteValue = quoteData.content && quoteData.content.split("");



  const dataOptions = {
    textareaValue: "",
  }

  const [typeData, setTypeData] = useState(dataOptions);
  const textAreaRef = useRef(null);



  const [remainingTime, setRemainingTime] = useState(startingTime);
  function fetchQuote(sequence) {
    fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => {
      if(sequence === "firstRender") {
        return (
          setQuoteData(data)
        )
      } else {
        return (
          setQuoteData(data),
          startGame()
        )
      }
    }
    )
  }

  useEffect(() => {
    fetchQuote("firstRender")
  }, [])

  useEffect(() => {
    if (!isGameStarted) return;
    setTimeout(() => {
      if (remainingTime === 0) {
        setIsGameStarted(false);
        setRemainingTime(startingTime);
        setWordsNum(countWords(typeData.textareaValue));
        return;
      }
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
  }, [remainingTime, isGameStarted]);

  function countWords(str) {
    const arr = str.trim().split(" ");
    return arr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsGameStarted(true);
    textAreaRef.current.disabled = false; //unfortunately without that hack focus is not applying to the textarea
    textAreaRef.current.focus();
    setTypeData((prevData) => {
      return {
        ...prevData,
        textareaValue: "",
      };
    });
    setWordsNum(0)
  }

  function handleClick() {
    if(typeData.textareaValue.length > 0) {
      fetchQuote()
    } else {
      startGame()
    }
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
  function changeTime(n) {
    setStartingTime(prevTime => prevTime + n)
    setRemainingTime(prevTime => prevTime + n)
  }

  return (
    <UserContext.Provider
      value={{
        textAreaRef,
        isGameStarted,
        handleChange,
        typeData,
        remainingTime,
        handleClick,
        wordsNum,
        quoteData,
        startingTime,
        changeTime,
        quoteValue,
        fetchQuote
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };

