import React, { useEffect, useState } from 'react'
import { client } from '../../api'
import { useParams } from 'react-router-dom'
// those names brings chaos as you cannot distinguish which component is a react component
// and which one is styled (in the template), use some prefix or read about naming conventions for styled components
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

  // this should be in a separate file reserved for api calls
  const fetchPokemon = () => {
		client.get(`/pokemon/${pokemonId}`).then(({ data }) => {
      // this is all wrong, you should set it once and make use of destructuring
      // setPokemon(data)
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

  // keep this logic separate
	const handleFavourite = () => {
		handleFav(pokemonId)
		setIsAddedToFavourite(prev => !prev)
	}

  // you should use destructuring here like so:

  // const { name, abilities, sprites, height, weight } = pokemon;

	return (
		<Wrapper>
			<PokemonWrapper>
				<PokemonImg src={pokemonImg} alt='' />
				<PokemonName>{pokemonName}</PokemonName>

        {
          /* this tag name represents paragraph, but it's a h3, why? */
          // should be styled.h3
        }
				<Paragraf>Abilities:</Paragraf>
				<PokemonAbilities
          // you should pass abilities as props here
          // because it's an array you can iterate on it and render it dynamically 
        >
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
        {
        /* fav box and fav p could be a separate component receiving isAddedToFavourites as isFavourite prop  */
        // beside that you have a paragraph and a paragraf - this is inconsistent
        }
				<FavouriteBox onClick={handleFavourite}>{isAddedToFavourite ? <FaStar /> : <FaStarHalfAlt />}</FavouriteBox>
				<FavouriteParagraf>{isAddedToFavourite ? 'Remove from favorites' : 'Add to favorites'}</FavouriteParagraf>
			</PokemonWrapper>
		</Wrapper>
	)
}

export default Pokemon
