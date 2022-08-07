import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 90vh;
	background-color: #333;
	margin-top: 3em;
	border-radius: 6px;
`

export const PokemonWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: gray;
	padding: 2em 8em;
	border-radius: 8px;
`

export const PokemonImg = styled.img`
	width: 200px;
`

export const PokemonName = styled.h1`
	background-color: #fff;
	padding: 0.5em 1em;
	border-radius: 8px;
	border: 1px solid black;
	&::first-letter {
		text-transform: uppercase;
	}
`

export const Paragraf = styled.h3`
	margin: 1.5em 2.5em;
`

export const PokemonAbilities = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`

export const PokemonAbility = styled.h4`
	text-transform: uppercase;
`

export const PokemonData = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 0 2em;
	width: 100%;
`

export const PokemonBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const PokemonDimensions = styled.h5``

export const FavouriteBox = styled.div`
	margin-top: 0.8em;
	padding: 0.5em;
	cursor: pointer;
	font-size: 3rem;
	color: gold;
`

export const FavouriteParagraf = styled.p`
	font-size: 1em;
`
