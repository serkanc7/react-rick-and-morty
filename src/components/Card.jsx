import React from 'react'
import { Link } from 'react-router-dom';

const Character = ({ character }) => {

    return (
        <Link to={`/details/${character.id}`} className="card">
            <img className="card__img" src={character.image} alt={character.name} />
            <div className="card__name">{character.name}</div>
        </Link>

    )
}

export default Character
