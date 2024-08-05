import { Link} from 'react-router-dom';

function GameCard(game) {

   const {idx, name, category, rating} =game;
    return (
        <div className="bg-light p-4 m-2 border">
          <h6>{name}</h6>
          <h4>{rating}</h4>
          <p>{category}</p>
          <Link to={"/games/" + idx } className="btn-link">Details </Link>
        </div>
    );
}

export default GameCard;