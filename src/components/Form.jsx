import React from 'react'
import { useState, useEffect } from 'react';

const STATUSES = ["alive", "dead", "unknown"];
const GENDERS = ["female", "male", "genderless", "unknown"];

const Form = ({ setCharacters }) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getCharacters();
    }

    useEffect(() => {
        getCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getCharacters() {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`);
        const { results } = await res.json();
        setCharacters(results);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="form__label">
                Name
                <input
                    className="form__input"
                    id="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="status" className="form__label">
                Status
                <select
                    className="form__select"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {STATUSES.map((status) => (
                        <option
                            value={status}
                            key={status}
                            className="form__option"
                        >
                            {status}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="species" className="form__label">
                Species
                <input
                    className="form__input"
                    type="text"
                    id="species"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
            </label>
            <label htmlFor="gender" className="form__label">
                Gender
                <select
                    className="form__select"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    {GENDERS.map((gender) => (
                        <option className="form__option" value={gender} key={gender}>{gender}</option>
                    ))}
                </select>
            </label>
            <button className="form__button">Submit</button>
        </form>
    )
}

export default Form
