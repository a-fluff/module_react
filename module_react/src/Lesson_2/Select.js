import './styles.css';
import React, {useState} from 'react';

function Select() {
  const texts = ['text1', 'text2', 'text3', 'text4', 'text5'];

  const [value, setValue] = useState(texts[0]);

  const options = texts.map((text, index) => {
    return <option value={text} key={index}>{text}</option>
  })

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className="wrapper">
      <select onChange={handleChange}>
        {options}
      </select>
      <p>Выбор: {value}</p>
    </div>
  )
}

export default Select