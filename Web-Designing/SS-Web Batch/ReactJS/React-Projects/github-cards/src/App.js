import CardList from "./CardList";
// import userData from './testData.json';
import { useEffect, useState } from 'react';
import SearchUser from "./SearchUser";
// api = http://localhost:3000/testData.json

function App() {
  const [profiles, setProfile] = useState([]);
  const [ctr, setCtr] = useState(0);

  const increaseCtr = () => {setCtr(ctr+1)};
// Side Effect
// useEffect hook
  // function fetchUsers(){
  //   fetch("http://localhost:3000/testData.json")
  //     .then(res => res.json())
  //     .then(data => setProfile(data))
  // };
  // fetchUsers();

  useEffect(()=>{
    fetch("http://localhost:3000/testData.json")
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [])
  console.log("render");
  
  const searchUsers = (username) => {
    // console.log(username);
    const users = profiles.filter(profile => {  
      return profile.login.toLowerCase().includes(username.toLowerCase());
    });
    setProfile(users);
  }

  return (
    <div>
      <button onClick={increaseCtr}>{ctr}</button>
      <h1>Github Cards</h1>
      <SearchUser onSearch={searchUsers} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
