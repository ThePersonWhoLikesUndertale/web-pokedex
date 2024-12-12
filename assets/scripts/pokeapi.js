const pokeApi = {}

pokeApi.getPokemons = (offset = 9, limit = 3) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results)
      .catch((error) => console.error(error));
}