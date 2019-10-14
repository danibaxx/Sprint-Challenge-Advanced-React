import React from 'react';

const Players = props => {
  console.log('Player Props', props)
  return(
    <div className='player-list'>
      {props.players.map(player => {
        return <p key={player.id}>{player.name}</p>
      })}
    </div>
  );
};

export default Players;