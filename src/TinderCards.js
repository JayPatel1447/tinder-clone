import React, {useState} from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Thomas Shelby',
            url:"https://hips.hearstapps.com/esquireuk.cdnds.net/17/15/1491835254-cillian-murphy.jpg?crop=1.00xw:0.705xh;0,0.00719xh&resize=640:*"

        },
        {
            name: 'Arther Shelby',
            url: 'https://ichef.bbci.co.uk/images/ic/640x360/p07l7vms.jpg'
        }
    ])

    //Swipe function to remove person
    const swiped = (direction, nameToDelete) =>{
        console.log("Removing"+ nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                
                       
            {people.map((person) => (
                <TinderCard 
                className="swipe"
                key={person.name}
                //where preventSwipe - User can swipe up and down also
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                    
                 </TinderCard>
            ))}
          </div> 
        </div>
    )
}

export default TinderCards
