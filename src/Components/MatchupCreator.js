import React, {useState} from 'react'
import './MatchupCreator.css'


function MatchupCreator({fighters}) {
  const[fighter1, setFighter1] = useState(null)
  const[fighter2, setFighter2] = useState(null)

  const selectFighter = (fighter) => {
    if(fighter1 === null) {
      setFighter1(fighter)
    } else if(fighter2 === null) {
      setFighter2(fighter)
    } else {
      alert('Fighters have been chosen! Either remove a fighter or save the matchup.')
    }
  }

  return (
    <div className="MatchupCreator">
      <div id='matchup'>
        <div className='fighter1'>
          {fighter1 && fighter2? <img src={fighter1.action_url} alt='fighter1'/> : null}
          <br></br> 
          {fighter1 && fighter2? <button onClick={() => setFighter1(null)}>Remove Fighter</button> : null}
        </div>
        <div className='stats'>
          <div className='statcard'>
          <h2 className='statline'>{fighter1? fighter1.full_name.split(" ")[1] : null} <span className='center-text'>vs.</span> {fighter2? fighter2.full_name.split(" ")[1] : null}</h2>
          <h2 className='statline'>{fighter1? fighter1.height : null} <span className='center-text'>Height</span> {fighter2? fighter2.height : null}</h2>
          <h2 className='statline'>{fighter1? fighter1.reach : null} <span className='center-text'>Reach</span> {fighter2? fighter2.reach : null}</h2>
          <h2 className='statline'>{fighter1? fighter1.wld : null} <span className='center-text'>Record</span> {fighter2? fighter2.wld : null}</h2>
          <br></br>
          <br></br>
          <button>Save Matchup</button>
          </div>
        </div>
        <div className='fighter2'>
          {fighter2? <img src={fighter2.action_url} alt='fighter2'/> : null}
          <br></br>
          {fighter2? <button onClick={() => setFighter2(null)}>Remove Fighter</button> : null}
        </div>
      </div>
      <h1>Choose Your Fighter:</h1>
      <div className='fighters'>
        {fighters.map(fighter => {
          return <img key={fighter.id} src={fighter.img_url} alt='fighter' onClick={() => selectFighter(fighter)}/>
        })}
      </div>
    </div>
  )
}

export default MatchupCreator