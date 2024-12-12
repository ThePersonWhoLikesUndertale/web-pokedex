function convertPokemonToLI(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ul class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ul>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function initialize() {
    const offset = 9;
    const limit = 3;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const pokemonList = document.getElementById("pokemonList");

    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokedex) => {
            for (let i = 0; i < pokedex.length; i++) {
                const pokemon = pokedex[i];
                pokemonList.innerHTML += convertPokemonToLI(pokemon);
            }
        })
        .catch((error) => console.error(error));
}

initialize();