import './App.css';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
        <h1>{props.test}</h1>
    </div>
  );
}


function mapStateToProps(state){
  return {
    test: state
  }
}

export default connect(mapStateToProps)(App);
