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
      <button onClick={() => handelDigit(3)}>3</button>
      <button onClick={() => handelDigit(4)}>4</button>
      <button onClick={() => handelDigit(5)}>5</button>
      <button onClick={() => handelDigit(6)}>6</button>
      <button onClick={() => handelDigit(7)}>7</button>
      <button onClick={() => handelDigit(8)}>8</button>
      <button onClick={() => handelDigit(9)}>9</button>
      <button onClick={() => handelDigit(0)}>0</button>
      <button onClick={() => handelOperation('+')}>+</button>
      <button onClick={() => handelOperation('-')}>-</button>
      <button onClick={() => {calculatorResult}}>=</button>
      <button onClick={() => {handelClear}}>C</button>

    </div>
  )
}
