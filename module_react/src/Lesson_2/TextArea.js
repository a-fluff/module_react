import './styles.css';
import React, {useState} from 'react';

function TextArea() {
  const [value, setValue] = useState('');

  function upperCase() {
    return value.toUpperCase()
  }


  return (
    <div className="wrapper">
      <textarea  value={value} onChange={(event) => {setValue(event.target.value)}} />
      <p>{upperCase()}</p>
    </div>
  )
}

export default TextArea;