import React from 'react';
import GameCard from './GameCard';

const GameList = (props) => {
    const games = props.games.map((game) => {
        return (
            <GameCard key={game.id} game={game}/>
        )
    });

    return <div className='row'>{games}</div>
}

export default GameList;