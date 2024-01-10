import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handelDigit = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };
  const handlOperation = (operation) => {
    setInput((prevInput) => prevInput + operation);
  };
  const calculatorResult = () => {
    try {
      setResult(Function('"use strict";return (' + input + ')')());
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
        <button type="button" onClick={() => handelDigit(digit)}>{digit}</button>
      ))}
      {['+', '-', '*', '/'].map((operation) => (
        <button type="button" onClick={() => handleOperation(operation)}>{operation}</button>
      ))}
      <button type="button" onClick={handleClear}>Clear</button>
      <button type="button" onClick={calculateResult}>=</button>
    </div>
  );
}
export default Calculator;
