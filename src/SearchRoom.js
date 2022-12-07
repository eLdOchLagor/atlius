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

        return lowerCaseWord.search(lowerCaseSearchString) !== -1;
        }
         return 0;
    }

    function clearText(e){
        setTimeout(() => {
            e.target.value="";
        setSearchString("");
        }, 50)


    }
    

    const resultList = elements.filter(room => matchSearch(room.room)).sort((a,b) => a.length -b.length).slice(0,5);
    //<img id="mapImage" src={TP_4} placeholder="Bild på planlösning"></img>

    //onBlur måste fixas.
return(
    <div className="App">
    <div onBlur={clearText} className="searchResults">
        <input id="input" type="text"  placeholder="Sök efter lokal..." autoComplete="off" onChange={changeInput}/>

        {resultList.map((input) => (
        <LocationInfo key={input.room} data={input}/>
        ))
        }
    </div>
    
    <Map width={100+"vw"}/>
</div>
)}

export default SearchRoom;