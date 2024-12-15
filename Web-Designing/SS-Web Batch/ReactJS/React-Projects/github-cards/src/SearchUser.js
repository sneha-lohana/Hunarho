import React, { useRef, useState } from 'react'

export default function SearchUser(props) {
    // const username = useRef("Ashish");
    const [username, setUserName] = useState("");
    const handleSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        props.onSearch(username);
        // console.log(username.current.value);
    }
    // console.log("render");
    const changeUsername = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value);
    }
  return (
    <form>
        {/* <input type='text' ref={username}/> */}
        <input type='text' placeholder='Enter Username' value={username} onChange={changeUsername} />
        <button onClick={handleSubmit}>Search User</button>
    </form>
  )
}
