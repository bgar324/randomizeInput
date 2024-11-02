import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const mutateText = (text) => {
    const mutate = text
      .split('')
      .map((char) =>
        Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
      )      
      .join('');
    setOutput(`${mutate}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    mutateText(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter text"
        className="input-box"
      />
      <pre className="output-box" onClick={copyToClipboard}>
        {output}
      </pre>
    </div>
  );
}

export default App;
