function convertPokemonTypesLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLI(pokemon) {
  return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ul class="types">
                    ${convertPokemonTypesLi(pokemon.types).join("")}
                </ul>

                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
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
