import { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

export default function Counter() {
  const [currentCounter, setCurrentCounter] = useState(0);
  const previousCount = usePrevious(currentCounter);

  return (
    <div className="App">
      <h2>Current Count: {currentCounter}</h2>
      <h2>Previous Count: {previousCount}</h2>

      <button
        onClick={() => {
          setCurrentCounter((prev) => prev + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCurrentCounter(0);
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          setCurrentCounter((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
