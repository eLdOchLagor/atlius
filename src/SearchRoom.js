import {ReactComponent as Map} from './maps/startPage.svg';
import React, { useState } from 'react';
import LocationInfo from './LocationInfo.js';
import {elements} from './DataBase.js';

function SearchRoom(){

    const [searchString, setSearchString] = useState("§");

    function changeInput(event) {
        setSearchString(event.target.value);
    }

    function matchSearch(word) {
        if(searchString!==""){
           const lowerCaseWord = word.toLowerCase();
        const lowerCaseSearchString = searchString.toLowerCase();

        return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
        }
         return 0;
    }

    function clearText(){
        setSearchString("");
    }
    

    const resultList = elements.filter(room => matchSearch(room.room)).slice(0,5);
    //<img id="mapImage" src={TP_4} placeholder="Bild på planlösning"></img>
return(
    <div className="App">
    <div className="searchResults">
<<<<<<< Updated upstream
        <form>
            <input id="input" type="text"  placeholder="Sök efter lokal..." onChange={changeInput}/>
        </form>
=======
        
        <input id="input" type="text"  placeholder="Sök efter lokal..." autoComplete="off" onChange={changeInput}/>
            
>>>>>>> Stashed changes
        {resultList.map((input) => (
        <LocationInfo key={input.room} data={input}/>
        ))
        }
    </div>
    
    <Map width={70+"vw"} height={100+"vh"}/>
</div>
)}

export default SearchRoom;