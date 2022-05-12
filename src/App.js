import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import header from '../src/app name.png'
import Navbar from './Components/Navbar';
// import Homepage from './Components/Homepage';
import MatchupCreator from './Components/MatchupCreator';
import SavedMatchups from './Components/SavedMatchups';

function App() {
  const [fighters, setFighters] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/fighters')
  .then(r => r.json())
  .then(data => setFighters(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/800px-UFC_Logo.svg.png"} className="ufc" alt="logo" />
        <img src={header} alt="app name" className="app-name"/>
      </header>
      <MatchupCreator fighters={fighters}/>
      <SavedMatchups/>
    </div>
  );
}

export default App;
