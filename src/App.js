import './App.css';
// import { useSelector } from 'react-redux';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Arkham from './components/Arkham';
import MostWanted from './components/mostWanted/MostWanted';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ClickMe from './components/ClickMe';

function App() {
  // const test = useSelector(state => state)
  return (
    <div className="App">
        <Navbar />
        <ClickMe />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="arkham_asylum" element={<Arkham />} />
          <Route path="most_wanted" element={<MostWanted />} />
        </Routes>
    </div>
  );
}

export default App;
