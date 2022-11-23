import TP_4 from './TP_4.svg';
import TP_5 from './TP_5.svg';
import { useState } from 'react';
import LocationInfo from './LocationInfo.js';
import {elements} from './DataBase.js';

function SearchRoom(){

    const [searchString, setSearchString] = useState("temp");

    function changeInput(event) {
        setSearchString(event.target.value);
    }

    function matchSearch(word) {
        const lowerCaseWord = word.toLowerCase();
        const lowerCaseSearchString = searchString.toLowerCase();

        return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
    }

  const resultList = elements.filter(room => matchSearch(room.room)).slice(1,10);

return(
<div className="App">
    <input id="input" type="text" placeholder="Sök efter lokal..." onChange={changeInput}/>
    {resultList.map((input) => (
    <LocationInfo key={input.room} data={input}/>
    ))
    }
    <img id="mapImage" src={TP_4} placeholder="Bild på planlösning"></img>
</div>
)}

export default SearchRoom;