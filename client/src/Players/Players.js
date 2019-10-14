import React from 'react';

const Players = props => {
  console.log('Player Props', props)
  return(
    <>
      {props.players.map(player => (
        <div key={player.id} >
          <h2>Name: {player.name}</h2>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p> 
        </div>
      ))}
    </>
  );
};

export default Players;

