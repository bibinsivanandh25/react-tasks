import { useState } from 'react';

function AcronymGenerator() {
  const [input, setInput] = useState('');
  const [acronym, setAcronym] = useState('');

  function toAcronym(text) {
    const result = text
      .split(' ')
      .filter((w) => w.length > 0)
      .map((w) => w[0].toUpperCase())
      .join('');
    return result;
  }

  const handleClick = () => {
    setAcronym(toAcronym(input));
  };

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          data-testid="input"
          type="text"
          placeholder="Enter a phrase..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="generate-button" onClick={handleClick}>
          Generate
        </button>
        <p data-testid="result">Result : {acronym}</p>
      </div>
    </div>
  );
}
export default AcronymGenerator;
