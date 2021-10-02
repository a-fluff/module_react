function Homework () {
  const isActive = true;
  let text;

  if(isActive) {
    text = 'OPEN';
  } else {
    text = 'CLOSE';
  };

  const result = 
    <>
      <div class="child" id={text}><span>{text}</span></div>
      <div class="child">{isActive && <span>{text + ' ' + 'TASK'}</span>}</div>
    </>

  return result;
}

export default Homework