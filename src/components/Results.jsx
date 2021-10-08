import React from 'react'
import Card from './Card'


const Results = ({ characters }) => {


    if (characters === undefined) {
        return (
            <section className="results">
                <h1>No Characters Found</h1>
            </section>
        )
    }

    return (
        <section className="results">
            {!characters.length ? (
                <h1>No Characters Found</h1>
            ) : (
                <div className="results__container">
                    {characters.map((character) => (
                        <Card key={character.id} character={character} />))}
                </div>
            )}
        </section>
    )
}

export default Results
