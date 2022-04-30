import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const test = useSelector(state => state)
  return (
    <div className="App">
        <h1>{test}</h1>
    </div>
  );
}

export default App;
