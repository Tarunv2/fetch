import { useEffect, useState } from "react";

function AliveCharactersList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchAliveCharacters() {
            try {
                let url = "https://rickandmortyapi.com/api/character";
                let aliveCharacters = [];

                while (url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    aliveCharacters.push(...data.results.filter(character => character.status === "Alive"));
                    url = data.info.next;
                }

                setCharacters(aliveCharacters);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        }

        fetchAliveCharacters();
    }, []);

    return (
        <div>
            <h1>Alive Characters</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AliveCharactersList;
