import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SearchRoom from './SearchRoom.js';
import LocationDetails from './LocationDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchRoom />}/>
        <Route path="/map/:roomName" element={<LocationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
