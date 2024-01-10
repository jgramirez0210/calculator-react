import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handelDigit = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };
  const handelOperation = (operation) => {
    setInput((prevInput) => prevInput + operation);
  };
  const calculatorResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };
  const handelClear = () => {
    setInput('');
    setResult(null);
  };
  return (
    <div>
      <div> Input: {input}</div>
      <div> Result: {result}</div>
      <button onClick={() => handelDigit(1)}>1</button>
      <button onClick={() => handelDigit(2)}>2</button>
      <button onClick={() => handelDigit(3)}>0</button>

    </div>
  )
}
