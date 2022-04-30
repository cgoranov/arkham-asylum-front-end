import './App.css';
// import { useSelector } from 'react-redux';
import Home from './components/Home';
import Instructions from './components/Instructions';
import Arkham from './components/Arkham';
import MostWanted from './components/MostWanted';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  // const test = useSelector(state => state)
  return (
    <div className="App">
        <Navbar />
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
