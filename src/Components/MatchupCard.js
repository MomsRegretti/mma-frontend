import React from 'react'

function MatchupCard({match, handleDeleteMatch, updateMatches}) {

const handleDelete = () => {
  fetch(`http://localhost:9292/savedmatchups/${match.id}`,{
    method: 'DELETE'
  })
    .then(r=>r.json())
    .then(data=>handleDeleteMatch(data))
}
const handleUpdate = () =>{
  const newfighter1 = match.fighter2
  const newfighter1_img = match.fighter2_img
  const newfighter2 = match.fighter1
  const newfighter2_img = match.fighter1_img
  fetch(`http://localhost:9292/savedmatchups/${match.id}`,{
    method: 'PATCH',
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify({
      fighter1: newfighter1,
      fighter1_img: newfighter1_img,
      fighter2: newfighter2,
      fighter2_img: newfighter2_img
    }),
  })
  .then(r=> r.json())
  .then(data=>updateMatches(data))
}
  return (
    <div className='ye'>
      <div className='matchupCard'>
        <img src={match.fighter1_img} alt='fighter1' />
        <img style={{'transform': 'scaleX(-1)'}} src={match.fighter2_img} alt='fighter2' />
        <h2>{match.fighter1} vs {match.fighter2}</h2>
      </div>
      <button className='button' onClick={handleDelete}>Delete Matchup</button>
      <button className='button1' onClick={handleUpdate}>NEW CHALLENGER</button>
    </div>
  )
}

export default MatchupCard