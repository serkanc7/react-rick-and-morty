import { useState } from 'react/cjs/react.development';
import Form from '../components/Form';
import Results from '../components/Results';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    return (
        <main className="home container">
            <Form setCharacters={setCharacters} />
            <Results characters={characters} />
        </main>
    )
}

export default Home
