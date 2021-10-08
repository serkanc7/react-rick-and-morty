import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Details = () => {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    useEffect(() => {
        async function getCharacter() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const json = await res.json();
            setCharacter(json);
            setLoading(false);
        }
        getCharacter();
    }, [id])
    console.log(character);

    return (
        <main className="container details-wrap">
            {loading && <h1>Loading</h1>}
            {!loading && <div className="details">
                <div className="details__top">
                    <img className="details__img" src={character.image} alt={character.name} />
                    <div className="details__info">
                        <div className="details__status">
                            <span className={`details__status-icon ${character.status === "Alive" && "alive"}`}></span> {character.status} - {character.species}
                        </div>
                        <h1 className="details__title">{character.name}</h1>
                    </div>
                </div>
                <div className="details__bottom">
                    <div className="details__section">
                        <h3 className="details__section-title">Location</h3>
                        <div className="details__section-text">{character.location.name}</div>
                    </div>
                    <div className="details__section">
                        <h3 className="details__section-title">Origin</h3>
                        <div className="details__section-text">{character.origin.name}</div>
                    </div>
                    <div className="details__section">
                        <h3 className="details__section-title">Gender</h3>
                        <div className="details__section-text">{character.gender}</div>
                    </div>
                    <div className="details__section">
                        <h3 className="details__section-title">Episodes</h3>
                        <div className="details__section-text">{character.episode.length}</div>
                    </div>
                </div>

            </div>
            }

        </main>
    )
}

export default Details
