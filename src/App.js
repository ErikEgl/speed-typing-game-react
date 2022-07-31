import React, {useEffect} from "react";


function App() {
  const [typeData, setTypeData] = React.useState({
    textareaValue: "",
  })

  const [remainingTime, setRemainingTime] = React.useState(10)
  const [wordsNum, setWordsNum] = React.useState(0)

  
  function countWords(str) {
    const arr = str.trim().split(' ');
    return arr.filter(word => word !== "").length
  }

  useEffect(() => {
    setTimeout(() => {
      if(remainingTime === 0) return
      setRemainingTime(prevTime => prevTime - 1)
    }, 1000);
  }, [remainingTime]);

  function handleClick() {
    setWordsNum(countWords(typeData.textareaValue))
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