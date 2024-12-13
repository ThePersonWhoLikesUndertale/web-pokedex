const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

function loadPokemonItens(offset, limit) {
  pokeApi
    .getPokemons(offset, limit)
    .then((pokedex = []) => {
      pokemonList.innerHTML += pokedex
        .map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ul class="types">
                        ${pokemon.types
                          .map((type) => `<li class="type ${type}">${type}</li>`)
                          .join("")}
                    </ul>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
          `).join("");
    })
    .catch((error) => console.error(error));
}

function initialize() {
  const limit = 10;
  let offset = 0;

  // Mostra apenas as 2 primeiras gerações
  const maxRecord = 251;

  loadPokemonItens(offset, limit);

  loadMoreButton.addEventListener("click", () => {
    offset += limit;
    const qtdRecordNextPage = offset+limit;

    if (qtdRecordNextPage >= maxRecord) {
      const newLimit = maxRecord - offset;
      loadPokemonItens(offset, newLimit);

      loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
      loadPokemonItens(offset, limit);
    }
  });
}

initialize();
