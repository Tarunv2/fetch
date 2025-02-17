async function fetchAliveCharacters() {
    try {
        let url = "https://rickandmortyapi.com/api/character";
        let aliveCharacters = [];

        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            const alive = data.results.filter(character => character.status === "Alive");
            aliveCharacters.push(...alive);

            url = data.info.next;
        }

        console.log(aliveCharacters);
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

fetchAliveCharacters();
