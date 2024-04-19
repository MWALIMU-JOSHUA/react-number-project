import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [textMessage, setTextMessage] = useState('');
  const [source, setSource] = useState('manual'); // default source is manual input

  const addNumber = (event) => {
    event.preventDefault();
    const newNumber = event.target.number.value;
    setNumbers([...numbers, newNumber]);
    event.target.reset();
  };

  const sendText = () => {
    // Here you can implement the logic to send the text message to the selected numbers
    // For demonstration purposes, we'll just log the numbers and the text message
    console.log(`Sending text "${textMessage}" to numbers:`, numbers);
    setTextMessage(''); // Clear the text message after sending
  };

  return (
    <div className="container">
      <h1 className="title">Number Text System</h1>

      <div className="input-container">
        <div className="source-select">
          <label className="input-label">
            Select Source:
            <select
              className="input-field"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            >
              <option value="manual">Manual Input</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="contacts">Phone Contacts</option>
              <option value="copyPaste">Copy/Paste</option>
            </select>
          </label>
        </div>

        <form onSubmit={addNumber} className="input-form">
          <label className="input-label">
            Add Number:
            <input
              className="input-field"
              type="text"
              name="number"
              required
              disabled={source !== 'manual'}
            />
          </label>
          <button className="input-button" type="submit" disabled={source !== 'manual'}>
            Add
          </button>
        </form>

        <form className="input-form">
          <label className="input-label">
            Text Message:
            <input
              className="input-field"
              type="text"
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              required
            />
          </label>
          <button className="input-button" type="button" onClick={sendText}>
            Send Text
          </button>
        </form>
      </div>

      <div className="numbers-container">
        <h2 className="numbers-title">Numbers:</h2>
        <ul className="numbers-list">
          {numbers.map((number, index) => (
            <li key={index} className="number-item">{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
