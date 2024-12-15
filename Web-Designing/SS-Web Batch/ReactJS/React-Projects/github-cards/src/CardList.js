import { useState } from 'react';
import Card from './Card';
import userData from './testData.json'
// Don't create global variable
// let pageNumber = 0;
export default function CardList(){
    // const profiles = userData;
    // let profiles = userData.slice(0, 5);
    // let start = 0, end=5;
    const [pageNumber, setPageNumber] = useState(0);
    const pageSize = 5;
    
    const [profiles, setProfile] = useState(userData.slice(0, pageSize));
    const onPrev = () => {
        setPageNumber(pageNumber-1);
        // console.log(pageNumber);
        // const start = pageNumber * pageSize;
        // const end = start + pageSize;
        // setProfile(userData.slice(start,end));
        changeProfiles();
    };
    const onNext = () => {
        // pageNumber +=1;
        setPageNumber(pageNumber+1);
        // console.log(pageNumber);
        // const start = pageNumber * pageSize;
        // const end = start + pageSize;
        // setProfile(userData.slice(start,end));
        changeProfiles();
    };

    const changeProfiles = () => {
        const start = pageNumber * pageSize;
        const end = start + pageSize;
        setProfile(userData.slice(start,end));
    }

    console.log('rendered', pageNumber);
    
    return (
        <>
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
            {profiles.map((profile, index) => {
                // return <Card {...profile} key={index} />
                return <Card {...profile} key={profile.id} />
            })}
            {/* <Card {...userData[0]} />
            <Card {...userData[1]} /> */}
            {/* <Card profile={userData[0]}/>
            <Card profile={userData[1]}/> */}
        </>
    )
}