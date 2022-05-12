import React from 'react'

function MatchupCard({match, handlesetMatches}) {

const handleDelete = () => {
  fetch(`http://localhost:9292/savedmatchups/${match.id}`,{
    method: 'DELETE'
  })
  .then(()=>fetch("http://localhost:9292/savedmatchups")
    .then(r=>r.json())
    .then(data=>handlesetMatches(data)))
}

  return (
    <div>
      <div className='matchupCard'>
        <img src={match.fighter1_img} alt='fighter1' />
        <img style={{'transform': 'scaleX(-1)'}} src={match.fighter2_img} alt='fighter2' />
        <h2>{match.fighter1} vs {match.fighter2}</h2>
      </div>
      <button className='button' onClick={handleDelete}>Delete Matchup</button>
    </div>
  )
}

export default MatchupCard