import React from 'react';

const PlayerCard = props => {
    return (
     <div className="player-card">
     <h3 data-testid="player">{props.name}</h3>
     <p>{props.country}</p>
     </div>
    );
}

export default PlayerCard;