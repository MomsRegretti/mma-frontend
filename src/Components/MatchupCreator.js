import React, {useEffect, useState} from 'react'
import './MatchupCreator.css'


function MatchupCreator({fighters}) {
  const[fighter1, setFighter1] = useState(null)
  const[fighter2, setFighter2] = useState(null)
  const[division, setDivision] = useState(0)
  const[divisionFighters, setDivisionFighters] = useState([])

  const selectFighter = (fighter) => {
    if(fighter1 === null) {
      setFighter1(fighter)
    } else if(fighter2 === null) {
      setFighter2(fighter)
    } else {
      alert('Fighters have been chosen! Either remove a fighter or save the matchup.')
    }
  }
  useEffect(() => {
    fetch(`http://localhost:9292/divisions/${division}`)
    .then(r => r.json())
    .then(data => setDivisionFighters(data.fighters))
  },[division])

  const handleSave = () => {
    fetch('http://localhost:9292/savedmatchups', {
      method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            fighter1: fighter1.full_name,
            fighter1_img: fighter1.headshot_url,
            fighter2: fighter2.full_name,
            fighter2_img: fighter2.headshot_url
          })
        })
        .then(r => r.json())
        
  }
  return (
    <div className="MatchupCreator">
      <div id='matchup'>
        <div className='fighter1'>
          {/* {fighter1? <img className='flags' src={fighter1.headshot_url} alt='flag1'/> : null} */}
          {fighter1 && fighter2? <img src={fighter1.action_url} alt='fighter1'/> : null}
          <br></br> 
          {fighter1 && fighter2? <button className="button" onClick={() => setFighter1(null)}>Remove Fighter</button> : null}
        </div>
        <div className='stats'>
          <div className='statcard'>
            <span>{fighter1? <img src={fighter1.flag} alt=''/> : null}{fighter2? <img src={fighter2.flag} alt=''/>: null}</span>
            <h2 className='statline'>{fighter1? fighter1.full_name.split(" ")[1] : null} <span className='center-text'>vs.</span> {fighter2? fighter2.full_name.split(" ")[1] : null}</h2>
            <h2 className='statline'>{fighter1? `${fighter1.height}"` : null} <span className='center-text'>Height</span> {fighter2? `${fighter2.height}"` : null}</h2>
            <h2 className='statline'>{fighter1? `${fighter1.reach}"` : null} <span className='center-text'>Reach</span> {fighter2? `${fighter2.reach}"` : null}</h2>
            <h2 className='statline'>{fighter1? fighter1.wld : null} <span className='center-text'>Record</span> {fighter2? fighter2.wld : null}</h2>
            <br></br>
            <br></br>
            <button onClick={handleSave} className="button">Save Matchup</button>
          </div>
        </div>
        <div className='fighter2'>
          {/* {fighter2? <img className='flags' src={fighter2.flag} alt='flag2'/>  : null} */}
          {fighter1 && fighter2? <img src={fighter2.action_url} alt='fighter2'/> : null}
          <br></br>
          {fighter1 && fighter2? <button className='button' onClick={() => setFighter2(null)}>Remove Fighter</button> : null}
        </div>
      </div>
      <ul className='divisions'>
        <button className='button' onClick={(e) => setDivision(e.target.id)} id='0'>Women's Strawweight</button>
        <button className='button' onClick={(e) => setDivision(e.target.id)} id='1'>Women's Bantamweight</button>
        <button className='button' onClick={(e) => setDivision(e.target.id)} id='2'>Men's Welterweight</button>
        <button className='button' onClick={(e) => setDivision(e.target.id)} id='3'>Men's Lightweight</button>
      </ul>
      <h1>Choose Your Fighter:</h1>
      <div className='fighters'>
        {divisionFighters.map(fighter => {
          return <img key={fighter.id} src={fighter.img_url} alt='fighter' onClick={() => selectFighter(fighter)}/>
        })}
      </div>
    </div>
  )
}

export default MatchupCreator