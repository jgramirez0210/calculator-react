import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleDigit = (digit) => {
    setInput((prevInput) => prevInput + digit);
  };
  const handleOperation = (operation) => {
    setInput((prevInput) => prevInput + operation);
  };
  const calculateResult = () => {
    try {
      if (/[\d]$/.test(input)) {
        setResult(evaluate(input));
      } else {
        setResult('Error: Invalid expression');
      }
    } catch (error) {
      setResult('Error: Invalid expression');
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
      <div className="calculator-grid">
        <div className="calcularor-"
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
          <button type="button" className={`button-${digit}`} onClick={() => handleDigit(digit)}>{digit}</button>
        ))}
        {['+', '-', '*', '/'].map((operation) => (
          <button type="button" onClick={() => handleOperation(operation)}>{operation}</button>
        ))}
        <button type="button" onClick={calculateResult}>=</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
