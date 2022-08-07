export const getLsPokemon = () => JSON.parse(localStorage.getItem('favourites') || '[]')

export const handleFav = (pokemonId) => {
    const favourites = getLsPokemon()

		if (favourites.includes(pokemonId)) {
			const indexToDelete = favourites.findIndex(item => item === pokemonId)
			favourites.splice(indexToDelete, 1)
		} else {
			favourites.push(pokemonId)
		}
		localStorage.setItem('favourites', JSON.stringify(favourites))
}