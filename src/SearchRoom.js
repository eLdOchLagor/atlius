import {ReactComponent as Map} from './maps/startPage.svg';
import React, { useState } from 'react';
import LocationInfo from './LocationInfo.js';
import {elements} from './DataBase.js';

function SearchRoom(){

    const [searchString, setSearchString] = useState("");

    function changeInput(event) {
        setSearchString(event.target.value);
    }

    function matchSearch(word) {
        const lowerCaseWord = word.toLowerCase();
        const lowerCaseSearchString = searchString.toLowerCase();

        return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
    }

    const resultList = elements.filter(room => matchSearch(room.room));
    //<img id="mapImage" src={TP_4} placeholder="Bild på planlösning"></img>
return(
    <div className="App">
    <div className="searchResults">
        <input id="input" type="text" placeholder="Sök efter lokal..." onChange={changeInput}/>
        {resultList.map((input) => (
        <LocationInfo key={input.room} data={input}/>
        ))
        }
    </div>
    
    <Map width={70+"vw"} height={100+"vh"}/>
</div>
)}

export default SearchRoom;