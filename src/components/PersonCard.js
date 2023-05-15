import React, {useState} from 'react';

const PersonCard = (props) => {
    //deconstructing array and setting it equals to props
    const {firstName, lastName, age, hairColor} = props
    //  setters and getters to useState and passing age as an argument
    const [currentAge, setCurrentAge] = useState(age)
    return (
        <div>
            <h1>{lastName} , {firstName}</h1>
            <p> age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
        {/* adding an onclick event that takes currentAge and adds 1 on click */}
            <button onClick={ (event) => setCurrentAge(currentAge + 1 ) }>BirthDay Button for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;