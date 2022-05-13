import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import NavBar from './Components/NavBar';
// import Homepage from './Components/Homepage';
import MatchupCreator from './Components/MatchupCreator';
import SavedMatchups from './Components/SavedMatchups';
import WeightClasses from './Components/WeightClasses'
import Home from './Components/Home'
import FighterCountries from './Components/FighterCountries';

function App() {
  const [fighters, setFighters] = useState([])
  const [matches, setMatches] = useState([])
  const [divisionid, setDivisionid] = useState(0)
  const [divisionFighters, setDivisionFighters] = useState([])
  const [divisions, setDivisions] = useState([])

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

  useEffect(() => {
    fetch(`http://localhost:9292/divisions/${divisionid}`)
    .then(r => r.json())
    .then(data => setDivisionFighters(data.fighters))
  },[divisionid])

  useEffect(() => {
    fetch('http://localhost:9292/divisions')
  .then(r => r.json())
  .then(data => setDivisions(data))
  }, [])

  const handleDivisionChange = (id) => {
    setDivisionid(id)
  }

  const handlesetMatches = (match) => {
    setMatches(matches => [...matches, match])
  }

  const handleDeleteMatch = (match) => {
    setMatches(matches.filter(matchup => matchup.id !== match.id))
  }

  const updateMatches = (match) => {
    setMatches(matches.map(ogmatch => {
      if(ogmatch.id === match.id){
        return match
      } else{
        return ogmatch
      }
    }))
  }

  return (
        <>
        <Router> 
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/fightercountries' element={<FighterCountries />}/>
            <Route path='/weightclasses' element={<WeightClasses divisions={divisions} fighters={fighters}/>}/>
            <Route path='/matchupcreator' element={<MatchupCreator handleDivisionChange={handleDivisionChange} divisionid={divisionid} divisionFighters={divisionFighters} fighters={fighters} handlesetMatches={handlesetMatches} />}/>
            <Route path='/savedmatchups' element={<SavedMatchups handleDeleteMatch={handleDeleteMatch} matches={matches} updateMatches={updateMatches}/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
