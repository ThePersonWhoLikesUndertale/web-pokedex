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
  const pokemonList = document.getElementById("pokemonList");

  pokeApi
    .getPokemons()
    .then((pokedex) => {
      pokemonList.innerHTML = pokedex.map(convertPokemonToLI).join("");
    })
    .catch((error) => console.error(error));
}

initialize();
