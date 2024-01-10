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
  const calculatorREsult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };
}
