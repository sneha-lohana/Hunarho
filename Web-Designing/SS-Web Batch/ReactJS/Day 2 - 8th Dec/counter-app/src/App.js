import Button from "./Button";
import { Display } from "./Display";
import {useState} from 'react';

export default function App(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {setCounter(counter+1);}

    return (<>
        <Button onIncrement={incrementCounter} ctr={counter} />
        <Display message={counter} val="React" />
    </>)
}