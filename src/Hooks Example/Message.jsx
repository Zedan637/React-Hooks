import React from 'react'
import { useState } from 'react'

const Message = () => {
    let message = "Hello"
    let [variable, setVariable] = useState("Hello");
    let gmHandler = () => {
        setVariable("Good Morning")
    }
    let gnHandler = () => {
        setVariable("Good Night")
    }
  return (
    <div>
        <h3>Displayed Message:{variable}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message