import React from 'react'
import MatchupCard from './MatchupCard'

function Matchups({matches, handlesetMatches}) {

  const renderMatches = () => {
    return matches.map(match => <MatchupCard key={match.id} match={match} matches={matches} handlesetMatches={handlesetMatches}/>)
  }

  return (
    <div className='matchups'>
      <h1 style={{'color':'white'}}>Your Saved Matchups!</h1>
      {renderMatches()}
    </div>
  )
}

export default Matchups