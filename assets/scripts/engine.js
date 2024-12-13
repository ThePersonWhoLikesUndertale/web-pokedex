function convertPokemonToLI(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ul class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
                </ul>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
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
