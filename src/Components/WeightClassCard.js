import React from 'react'

function WeightClassCard({division, fighters}) {
  return (
    <div className='WeightClassCard'>
      <h1>{division.name}</h1>
      <h2>UFC {division.weight_limit}</h2>
      <ul>
        {fighters.map(fighter => {
          return fighter.division_id === division.id ? <li>{fighter.full_name}</li> : null 
        })}
      </ul>
    </div>
  )
}

export default WeightClassCard