import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {elements} from './DataBase.js';

import {ReactComponent as Täppan3} from './maps/Täppan3.svg';
import {ReactComponent as Täppan4} from './maps/Täppan4.svg';
import {ReactComponent as Täppan5} from './maps/Täppan5.svg';
import {ReactComponent as Kåkenhus1} from './maps/Kåken1.svg';
import {ReactComponent as Kåkenhus4} from './maps/Kåken4.svg';
import {ReactComponent as Kåkenhus5} from './maps/Kåken5.svg';
import {ReactComponent as Back} from './icons/back.svg';
import { Link } from "react-router-dom";

function getRoomByName(room){
    const found = elements.find(element => {
        return element.room == room;
    });
    return found;
}

function LocationDetails(){
    var mapName;
    const {roomName} = useParams();
    const room = getRoomByName(roomName);
    
    if(room){
        mapName = room.building + room.floor;
        console.log(mapName);
    }
    else{
        mapName = roomName;
        console.log(mapName);
    }
    
    useEffect(() => {
        if(room){
            document.querySelector("#"+roomName).style.fill = "#00B3E1";
        }
        }, []);

        function changeFloor(){

        }

    return(
        <div className="details">
            <Link to="/">
                <div id="tillbakaKnapp">
                <Back/>   
                </div>       
            </Link>

            {mapName=='Täppan3' &&
                <Täppan3/>
            }
            {mapName=='Täppan4' &&
                <Täppan4/>
            }
            {mapName=='Täppan5' &&
                <Täppan5/>
            }
            
            {mapName=='Kåkenhus4' &&
                <Kåkenhus4/>
            }
            {mapName=='Kåkenhus5' &&
                <Kåkenhus5/>
            }
            
            {mapName=='Tappan' &&
            <>
                <Täppan3/>
                <div id='floorContainer'>
                <button onClick={changeFloor}>Våning 3</button>
                <button onClick={changeFloor}>Våning 4</button>
                <button onClick={changeFloor}>Våning 5</button>
                </div>
            </>
            }
            {mapName=='Kakenhus' &&
            <>
                <Kåkenhus1/>
                <div id='floorContainer'>
                <button onClick={changeFloor}>Våning 1</button>
                <button onClick={changeFloor}>Våning 2</button>
                <button onClick={changeFloor}>Våning 3</button>
                <button onClick={changeFloor}>Våning 4</button>
                <button onClick={changeFloor}>Våning 5</button>
                </div>
            </>
            }
            
            {mapName!=roomName &&
                <div id="description">
                    <h1>{room.room}</h1>
                    <h2>Ligger i {room.building}</h2>
                    <h2>Våning {room.floor}</h2>
                </div>
            }
        </div>

    )
}
export default LocationDetails;