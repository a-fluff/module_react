import React, {useState} from 'react';



function States() {
  //Вариант1 лучше не использовать в работе
  // const state = useState(0);

  // const name = state[0];
  // const setName = state[1];

  // let count = 0;

  // function addCount() {
  //   count++
  // }

  //Вариант1 лучше не использовать в работе
  const [count, setCount] = useState(0);
  const [inUser, setInUser] = useState(false);

  function cube(number) {
    return number ** 3
  }

  function addCountState() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>
        {/* <div>
        <p>
          Let: {count}
        </p>
        <button onClick={addCount}>Add</button>
        </div>
        <div>
          <p>
            State: {count}
          </p>
          <button onClick={addCountState}>Add</button>
        </div> */}
        <div>
          Hello, {inUser ? 'User!' : 'Guest!'}
        </div>
        <button onClick={() => {setInUser(!inUser)}}>{inUser ? 'Log out' : 'Log in'}</button>
      </div>
    </div>
  )
};

export default States;