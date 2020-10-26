import React, { useState } from 'react';
import Buttons from './Buttons'
import './App.css';

function App() {

  const [result, setResult] = useState('0');
  const [input, setInput] = useState('');

  const clearResult = () => {
    setResult('0')
    setInput('')
  }

  const evaluateInput = () => {
    try {
      const evaluatedInput = eval(input)
      setResult(evaluatedInput)

    } catch (error) {
      setResult('error')
    }

    setInput('')
  }


  const addToInput = (value) => {
    console.log(value)
    const operators = /[\/\*\+\-]/g;
    // if theres no num yet, the input becomes the value (which allows the prev result to be further operated on)
    if (input.length === 0 && value.match(operators)) {
      return setInput(result + value)
    }

    // split input into strings by operators
    const numStrings = input.split(operators);
    const lastNum = numStrings[numStrings.length - 1];
    console.log(numStrings)
    console.log(lastNum)
    // if the latest number doesnt already contain a decimal, allow the value to be a decimal
    if (lastNum.indexOf('.') !== -1 && value === '.') {
      return
    }

    const lastChar = input[input.length - 1]
    // if the last character is an operator and the value is an operator, only use the most recent operator unless its the negative symbol or decimal
    if (isNaN(parseInt(lastChar)) && isNaN(parseInt(value)) && value !== '-' && value !== '.') {
      const newInput = input.slice(0, -1) + value;
      return setInput(newInput)
    }

    // if the input is already 0 and the value is a number besides 0, set the input as the next number
    if (input.length === 1 && input[0] === '0' && !isNaN(parseInt(value))) {
      return setInput(value)
    }

    if (value === '←') {
      const lastCharDeleted = input.slice(0, -1);
      return setInput(lastCharDeleted)
    }

    return setInput(input + value)
  }

  return (
    <div className="App">
      <h1>Calculation Station</h1>
      <div className="calculator">

        <Buttons addToInput={addToInput} clearResult={clearResult} evaluateInput={evaluateInput} />

        <p id="input"> {input}</p>
        <p id="display">{result}</p>




      </div>
    </div>
  );
}

export default App;
