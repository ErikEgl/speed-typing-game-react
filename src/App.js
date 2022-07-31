import React from "react";

function App() {
  const [typeData, setTypeData] = React.useState({
    textareaValue: "",
  })

  const [wordsNum, setWordsNum] = React.useState(0)

console.log(wordsNum);
  
  function countWords(str) {
    const arr = str.trim().split(' ');
    return arr.filter(word => word !== "").length
  }



  function handleClick() {
    console.log(123);
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
        <h4>Time remaining: ???</h4>
        <button onClick={handleClick}>Start</button>
        <h1>Word count: {wordsNum}</h1>
      </>
  )
}

export default App;