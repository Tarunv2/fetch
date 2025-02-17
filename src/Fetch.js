async function fetchAliveCharacters() {
    try {
        let url = "https://rickandmortyapi.com/api/character";
        let aliveCharacters = [];

        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            // Filter out characters whose status is "Alive"
            const alive = data.results.filter(character => character.status === "Alive");
            aliveCharacters.push(...alive);

            // Move to the next page (if available)
            url = data.info.next;
        }

        // Log all alive characters
        console.log(aliveCharacters);
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

fetchAliveCharacters();
