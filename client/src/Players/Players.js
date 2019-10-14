import React from 'react';

const Players = props => {
  console.log('Player Props', props)
  return(
    <div className='players'>
      {props.players.map(player => {
        return <p>{player.name}</p>
      })}
    </div>
  );
};

export default Players;