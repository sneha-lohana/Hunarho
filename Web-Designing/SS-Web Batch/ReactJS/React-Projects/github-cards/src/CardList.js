import Card from './Card';


export default function CardList({profiles}){
    return (
        <>
            {profiles.map((profile, index) => {
                return <Card {...profile} key={profile.id} />
            })}
        </>
    )
}