import React from 'react'
import MatchupCard from './MatchupCard'

function Matchups({matches}) {

  const renderMatches = () => {
    return matches.map(match => <MatchupCard key={match.id} match={match} />)
  }

  return (
    <div className='matchups'>
      <h1 style={{'color':'white'}}>Your Saved Matchups!</h1>
      {renderMatches()}
    </div>
  )
}

export default Matchups