import React, {useEffect} from "react";


function App() {
  const [typeData, setTypeData] = React.useState({
    textareaValue: "",
  })
  const timeRemain = 10
  const [isGameStarted, setIsGameStarted] = React.useState(false)
  const [remainingTime, setRemainingTime] = React.useState(timeRemain)
  const [wordsNum, setWordsNum] = React.useState(0)

  
  function countWords(str) {
    const arr = str.trim().split(' ');
    return arr.filter(word => word !== "").length
  }

  useEffect(() => {
    if(!isGameStarted) return
    setTimeout(() => {
      if(remainingTime === 0) {
        setIsGameStarted(false)
        setRemainingTime(timeRemain)
        return
      }
      setRemainingTime(prevTime => prevTime - 1)
    }, 1000);
  }, [remainingTime, isGameStarted]);

  function handleClick() {
    setWordsNum(countWords(typeData.textareaValue))
    setIsGameStarted(true)
  }

  function handleChange(event) {
    const {name, value} = event.target
    setTypeData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  return (
      <>
        <h1>How fast do you type?</h1>
        <textarea name="textareaValue" onChange={handleChange} value={typeData.textareaValue}/>
        <h4>Time remaining: {remainingTime}</h4>
        <button onClick={handleClick}>Start</button>
        <h1>Word count: {wordsNum}</h1>
      </>
  )
}

export default App;