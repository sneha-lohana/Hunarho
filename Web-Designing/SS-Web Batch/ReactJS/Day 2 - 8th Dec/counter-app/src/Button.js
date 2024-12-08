export default function Button(props){
    const handleClick = () => {props.onIncrement();}
    return <button onClick={handleClick}>Clicked {props.ctr} times</button>
}