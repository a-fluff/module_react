import React, {useState} from 'react';
import './styles.css'

function Inputs() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange(e) {
    setValue(e.target.value);
  };

  function handleChange2(e) {
    setValue2(e.target.value);
  };

  function resultNumber() {
    setResult(Number(value) + Number(value2))
  }

  return (
    <div className="wrapper">
      <input value={value} onChange={handleChange} placeholder="Enter to name" />
      +
      <input value={value2} onChange={handleChange2} placeholder="Enter to name" />

      <button onClick={resultNumber}>Result</button>

      <p>Total: {result}</p>
    </div>
  )
}

export default Inputs