import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import NavBar from './Components/NavBar';
// import Homepage from './Components/Homepage';
import MatchupCreator from './Components/MatchupCreator';
import SavedMatchups from './Components/SavedMatchups';
import WeightClasses from './Components/WeightClasses'
import Home from './Components/Home'

function App() {
  const [fighters, setFighters] = useState([])
  const [matches, setMatches] = useState([])
  // const [divisions, setDivisions] =useState(0)
  useEffect(() => {
    fetch('http://localhost:9292/fighters')
  .then(r => r.json())
  .then(data => setFighters(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/savedmatchups')
    .then(r => r.json())
    .then(data => setMatches(data))
  }, [])

  const handlesetMatches = (data) => {
    setMatches(data)
  }

  return (
        <>
        <Router> 
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/weightclasses' element={<WeightClasses fighters={fighters}/>}/>
            <Route path='/matchupcreator' element={<MatchupCreator fighters={fighters} handlesetMatches={handlesetMatches}/>}/>
            <Route path='/savedmatchups' element={<SavedMatchups matches={matches} handlesetMatches={handlesetMatches}/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
