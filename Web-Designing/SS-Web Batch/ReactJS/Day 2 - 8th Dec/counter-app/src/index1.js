import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Button(){
  // let counter = 0;
  // console.log(c, f);
  // console.log("render");

  // const setCounter = () => {
  //   counter = counter+1;
  //   console.log(counter);
  //   // console.log(Math.random());
  // }
  // return <button onclick="setCounter();">Clicked {counter} times</button>
  // return <button onClick={setCounter()}>Clicked {counter} times</button>

  // Every function that starts with use keyword is called React Hooks
  // useState maintains and manages the state of the Component.
  const [counter, setCounter] = useState(0);
  console.log("render");
  const handlClick = () => {
    setCounter(counter+1);
  }

  return <button onClick={handlClick}>Clicked {counter} times</button>
  
  // Anonymous function
  // return <button onClick={function (){
  //   console.log(Math.random());
  // }}>Clicked {counter} times</button>

  // Arrow function
  // return <button onClick={()=>console.log(Math.random())}>{counter}</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button />);
