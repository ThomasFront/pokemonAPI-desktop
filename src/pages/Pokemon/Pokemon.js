import React, { useEffect, useState } from 'react'
import { client } from '../../api'
import { useParams } from 'react-router-dom'
import {
	Paragraf,
	PokemonAbility,
	PokemonImg,
	PokemonName,
	PokemonWrapper,
	Wrapper,
	PokemonAbilities,
	PokemonData,
	PokemonBox,
	PokemonDimensions,
	FavouriteBox,
	FavouriteParagraf,
} from './Pokemon.styles'
import { FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { getLsPokemon, handleFav } from '../../helpers'

function Pokemon() {
	const { pokemonId } = useParams()

	const [isAddedToFavourite, setIsAddedToFavourite] = useState(getLsPokemon().includes(pokemonId))

	const [pokemonName, setPokemonName] = useState('')
	const [pokemonFirstAbility, setPokemonFirstAbility] = useState('')
	const [pokemonSecondAbility, setPokemonSecondAbility] = useState('')
	const [pokemonImg, setPokemonImg] = useState('')
	const [pokemonHeight, setPokemonHeight] = useState('')
	const [pokemonWeight, setPokemonWeight] = useState('')

	const fetchPokemon = () => {
		client.get(`/pokemon/${pokemonId}`).then(({ data }) => {
			setPokemonName(data.name)
			setPokemonFirstAbility(data.abilities[0].ability.name)
			setPokemonSecondAbility(data.abilities[1].ability.name)
			setPokemonImg(data.sprites.front_default)
			setPokemonHeight(data.height)
			setPokemonWeight(data.weight)
		})
	}

	useEffect(() => {
		fetchPokemon()
	}, [])

	const handleFavourite = () => {
		handleFav(pokemonId)
		setIsAddedToFavourite(prev => !prev)
	}

	return (
		<Wrapper>
			<PokemonWrapper>
				<PokemonImg src={pokemonImg} alt='' />
				<PokemonName>{pokemonName}</PokemonName>
				<Paragraf>Abilities:</Paragraf>
				<PokemonAbilities>
					<PokemonAbility>{pokemonFirstAbility}</PokemonAbility>
					<PokemonAbility>{pokemonSecondAbility}</PokemonAbility>
				</PokemonAbilities>
				<PokemonData>
					<PokemonBox>
						<Paragraf>Height:</Paragraf>
						<PokemonDimensions>{pokemonHeight} ft</PokemonDimensions>
					</PokemonBox>
					<PokemonBox>
						<Paragraf>Weight:</Paragraf>
						<PokemonDimensions>{pokemonWeight} kg</PokemonDimensions>
					</PokemonBox>
				</PokemonData>
				<FavouriteBox onClick={handleFavourite}>{isAddedToFavourite ? <FaStar /> : <FaStarHalfAlt />}</FavouriteBox>
				<FavouriteParagraf>{isAddedToFavourite ? 'Remove from favorites' : 'Add to favorites'}</FavouriteParagraf>
			</PokemonWrapper>
		</Wrapper>
	)
}

export default Pokemon
