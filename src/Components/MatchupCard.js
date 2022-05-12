import React from 'react'

function MatchupCard({match}) {
  return (
    <div>
      <div className='matchupCard'>
        <img src={match.fighter1_img} alt='fighter1' />
        <img style={{'transform': 'scaleX(-1)'}} src={match.fighter2_img} alt='fighter2' />
        <h2>{match.fighter1} vs {match.fighter2}</h2>
      </div>
      <button className='button'>Delete Matchup</button>
    </div>
  )
}

export default MatchupCard