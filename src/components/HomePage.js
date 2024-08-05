import GameCard from './GameCard';
import {useState} from 'react';

const HomePage = ({gamesList}) => {
    const [categoryFilter, setCategoryFilter]= useState('All')
    let filteredGames;

    if (categoryFilter === 'All') {
        filteredGames = gamesList;
    } else {
        filteredGames = gamesList.filter(game => game.category === categoryFilter);
    }

    return (
        <div>
            <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('All')}> All</button>
            <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Fun')}> Fun</button>
            <button className="btn btn-primary me-2" onClick={() => setCategoryFilter('Dek Build')}> Dek Build</button>
            {filteredGames.map((game, idx) => <GameCard name={game.name} category={game.category} idx={idx} />)}
        </div>
    );
}

export default HomePage;