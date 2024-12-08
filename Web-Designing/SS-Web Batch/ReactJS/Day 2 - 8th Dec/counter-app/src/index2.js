import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

// function Display(props){
//   console.log(props);
//   return <div>{props.message}</div>
//   // return <div>...</div>
// }

function Display({message}){
  return <div>{message}</div>
}

function Button(props){
  // const [counter, setCounter] = useState(0);
  const handleClick = () => {props.onIncrement();}
  return <button onClick={handleClick}>Clicked {props.ctr} times</button>
}

function App(){
  // Uplifting the useState of Child to Parent
  const [counter, setCounter] = useState(0);
  // const handleClick = () => {setCounter(counter+1);}
  const incrementCounter = () => {setCounter(counter+1);}

  return (<>
    <Button onIncrement={incrementCounter} ctr={counter} />
    {/* <Display message="hi" val="React" /> */}
    <Display message={counter} val="React" />
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
// root.render(<Button />);

// root.render(<Button /> <Display />); //error

// root.render([<Button />, <Display />]);
// root.render(
//   <div>
//     <Button/>
//     <Display/>
//   </div>
// )

// root.render(
//   <React.Fragment>
//     <Button />
//     <Display />
//   </React.Fragment>
// )

// root.render(
//   <>
//     <Button />
//     <Display />
//   </>
// )