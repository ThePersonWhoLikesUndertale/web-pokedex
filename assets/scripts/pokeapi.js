const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;
  
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type1] = types;
  
  pokemon.type = type1;
  pokemon.types = types;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
  
  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results)
      .then((pokedex) => pokedex.map(pokeApi.getPokemonDetail))
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonDetails) => pokemonDetails)
      .catch((error) => console.error(error));
}