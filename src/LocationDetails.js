import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {elements} from './DataBase.js';
import {ReactComponent as Täppan5} from './maps/Täppan4.svg';

function getRoomByName(room){
    const found = elements.find(element => {
        return element.room == room;
    });
    return found;
}

function LocationDetails(){
    const {roomName} = useParams();
    const room = getRoomByName(roomName);

    const mapName = room.building + room.floor;
    console.log(mapName);

    useEffect(() => {
        document.querySelector("#"+roomName).style.fill = "lightblue";
      }, []);

    return(
        <div className="details">
            <Täppan5/>
            <div id="description">
                <h1>{room.room}</h1>
                <h2>Ligger i {room.building}</h2>
                <h2>Våning {room.floor}</h2>
            </div>
        </div>
    )
    
}
export default LocationDetails;