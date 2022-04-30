import './App.css';
// import { useSelector } from 'react-redux';
import Home from './components/Home';
import Instructions from './components/Instructions';
import { Routes, Route } from "react-router-dom";

function App() {
  // const test = useSelector(state => state)
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
    </div>
  );
}

export default App;
