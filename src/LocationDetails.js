import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {elements} from './DataBase.js';
import { Link } from "react-router-dom";

import {ReactComponent as Täppan3} from './maps/Täppan3.svg';
import {ReactComponent as Täppan4} from './maps/Täppan4.svg';
import {ReactComponent as Täppan5} from './maps/Täppan5.svg';
import {ReactComponent as Kåkenhus1} from './maps/Kåken1.svg';
import {ReactComponent as Kåkenhus2} from './maps/Kåken2.svg';
import {ReactComponent as Kåkenhus3} from './maps/Kåken3.svg';
import {ReactComponent as Kåkenhus4} from './maps/Kåken4.svg';
import {ReactComponent as Kåkenhus5} from './maps/Kåken5.svg';
import {ReactComponent as Back} from './icons/back.svg';

function getRoomByName(room){
    const found = elements.find(element => {
        return element.room == room;
    });
    return found;
}

function LocationDetails(){
    var mapName;
    var startFloor = "heh";

    const {roomName} = useParams();
    const room = getRoomByName(roomName);

    // Om man tryckt på Täppan kommer våningarna för Täppan att visas, samma för Kåken
    if(roomName == "Tappan"){
        startFloor = "TP3";
    }
    else if(roomName == "Kakenhus"){
        startFloor = "K3";
    }

    const [currentFloor, setCurrentFloor] = useState(startFloor);
    
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

        function changeFloor(floor){
            setCurrentFloor(floor);
        }

    return(
        <div className="details">
            <Link to="/">
                <div id="tillbakaKnapp">
                <Back/>   
                </div>       
            </Link>

            {(mapName=='Täppan3' || currentFloor=='TP3') &&
                <Täppan3/>
            }
            {(mapName=='Täppan4' || currentFloor=='TP4') &&
                <Täppan4/>
            }
            {(mapName=='Täppan5' || currentFloor=='TP5') &&
                <Täppan5/>
            }
            
            {(mapName=='Kåkenhus1' || currentFloor=='K1') &&
                <Kåkenhus1/>
            }
            {(mapName=='Kåkenhus2' || currentFloor=='K2') &&
                <Kåkenhus2/>
            }
            {(mapName=='Kåkenhus3' || currentFloor=='K3') &&
                <Kåkenhus3/>
            }
            {(mapName=='Kåkenhus4' || currentFloor=='K4') &&
                <Kåkenhus4/>
            }
            {(mapName=='Kåkenhus5' || currentFloor=='K5') &&
                <Kåkenhus5/>
            }
            
            {mapName=='Tappan' &&
            <>
                <div id='floorContainer'>
                <button onClick={() => changeFloor("TP3")}>Våning 3</button>
                <button onClick={() => changeFloor("TP4")}>Våning 4</button>
                <button onClick={() => changeFloor("TP5")}>Våning 5</button>
                </div>
            </>
            }
            {mapName=='Kakenhus' &&
            <>
                <div id='floorContainer'>
                <button onClick={() => changeFloor("K1")}>Våning 1</button>
                <button onClick={() => changeFloor("K2")}>Våning 2</button>
                <button onClick={() => changeFloor("K3")}>Våning 3</button>
                <button onClick={() => changeFloor("K4")}>Våning 4</button>
                <button onClick={() => changeFloor("K5")}>Våning 5</button>
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