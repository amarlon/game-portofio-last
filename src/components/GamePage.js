
import { useParams } from 'react-router-dom';

const GamePage = ({gamesList})=>{
    const { gameId } = useParams();
    const game = gamesList.find(g => g.id === parseInt(gameId));

    if(!game){
        return <h3>No Game found!</h3>;
    }

    const {name, category, rating} = game;
    
    return (
        <div>
            <h3>{ name }</h3>
            <p>{ category }</p>
            <p>{ rating }</p>

        </div>
    );

}

export default GamePage;