export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
};

export const createPokemon = (pokemon) => {
  return $.ajax({
      method: 'POST',
      data: {
        pokemon: {
        name: pokemon.name,
        image_url: pokemon.image_url,
        poke_type: pokemon.type,
        attack: pokemon.attack,
        defense: pokemon.defense,
        moves: pokemon.moves,
        item_ids: pokemon.item_ids
        }
      },
      url: `/api/pokemon`
  });
};
