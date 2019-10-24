import React from 'react';

const Players = props => {
  // console.log('Player Props', props)
  return(
    <div className='players-card'>
      {props.players.map(player => (
        <div 
          key={player.id}
          className='players'
        >
          <h2>Name: {player.name}</h2>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p> 
        </div>
      ))}
    </div>
  );
};

export default Players;

