import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import SearchRoom from './SearchRoom.js';
import LocationDetails from './LocationDetails';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SearchRoom />}/>
        <Route path="/map/:roomName" element={<LocationDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
