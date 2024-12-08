import React from 'react';
import ReactDOM from 'react-dom/client';

// function Hello(){
//   return <h1>Hello</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Hello />);

// actual dom
const root1 = document.getElementById("root1");
// virtual dom
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

setInterval(()=>{
  root1.innerHTML = `
<div>
  <h1>Hello JS!</h1>
  <input />
  <p>${new Date().toLocaleTimeString()}</p>
</div>
`
root2.render(
  <div>
  <h1>Hello ReactJS!</h1>
  <input />
  <p>{new Date().toLocaleTimeString()}</p>
</div>
)
}, 1000);

