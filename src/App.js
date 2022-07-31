import React from "react";

function App() {
  const [typeData, setTypeData] = React.useState({
    textareaValue: "",
  })
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
        <h1>title</h1>
        <textarea name="textareaValue" onChange={handleChange} value={typeData.textareaValue}/>
        <h4>the amount of time remaining</h4>
        <button>start the game</button>
        <h1>word count</h1>
      </>
  )
}

export default App;