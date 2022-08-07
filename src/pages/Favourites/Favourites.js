import React from 'react'
import { Wrapper } from './Favourites.styles'
import { LinkItem } from '../AllPokemons/AllPokemons.styles'
import { getLsPokemon } from '../../helpers'

function Favourites() {
	return (
		<Wrapper>
			{getLsPokemon().map(pokemon => (
				<LinkItem to={`/pokemon/${pokemon}`}>{pokemon}</LinkItem>
			))}
		</Wrapper>
	)
}

export default Favourites
