import React from 'react';

const PlayerCard = props => {
    return (
     <div>
     <h3>{props.name}</h3>
     <p>{props.country}</p>
     </div>
    );
}

export default PlayerCard;