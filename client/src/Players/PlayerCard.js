import React from 'react';

const PlayerCard = (props) => {
  // console.log('PlayerCard', props)
  const { name, country, searches } = props.players;
  return(
    <div className='player-card'>
      <h2>Name: {name}</h2>
      <p>Country: {country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
};

export default PlayerCard;