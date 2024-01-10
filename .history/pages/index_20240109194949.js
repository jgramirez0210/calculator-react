import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handelDigit = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };
  const handleOperation = (operation) => {
    setInput((prevInput) => prevInput + operation);
  };
  const calculateResult = () => {
    try {
      const safeEval = new Function('return ' + input);
      setResult(safeEval());
    } catch (error) {
      setResult('Error');
    }
  };
  const handleClear = () => {
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
