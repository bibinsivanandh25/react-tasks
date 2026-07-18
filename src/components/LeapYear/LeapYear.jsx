import React, { useState } from 'react';
import './LeapYear.css';

const LeapYear = () => {
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const checkLeapYear = () => {
    const trimmedYear = year.trim();
    if (!trimmedYear) {
      setError('Please enter a valid year');
      setMessage('');
      return;
    }

    const numYear = Number(trimmedYear);
    const isLeapYear =
      numYear % 400 === 0 || (numYear % 4 === 0 && numYear % 100 !== 0);
    setMessage(
      isLeapYear ? `${numYear} is Leap Year` : `${numYear} is not a Leap Year`,
    );
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        data-testid="year-input"
        placeholder="Please enter a year"
      />

      <button data-testid="check-btn" onClick={checkLeapYear}>
        Check
      </button>

      {error && (
        <div data-testid="error-msg" className="error">
          {error}
        </div>
      )}
      {message && (
        <div data-testid="result" className="result">
          {message}
        </div>
      )}
    </div>
  );
};

export default LeapYear;
