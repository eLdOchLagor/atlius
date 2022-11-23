import { findByLabelText } from "@testing-library/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function LocationInfo(loc) {
    //console.log(loc);
    return (
    <Link to={"/map/" + loc.data.room}>
    <div className="room">
      <h1 className="roomTitle"><b>{loc.data.room}</b> -  {loc.data.building}</h1>
    </div>
    </Link>
    );
  }
  
  export default LocationInfo;