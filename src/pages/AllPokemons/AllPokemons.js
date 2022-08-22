import React, { useEffect, useState } from 'react'
import { client } from '../../api'
// why do you leave unused variables?
import { Link } from 'react-router-dom'
import { BtnWrapper, LinkItem, LinkWrapper, PokemonFavShow, Test } from './AllPokemons.styles'
import { Button } from '../../components/Button/Button.styles'
import { FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { getLsPokemon, handleFav } from '../../helpers'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks'

function AllPokemons() {
	const [pokemons, setPokemons] = useState([])
	const [favs, setFavs] = useLocalStorage('favourites', [])
	const [prevPage, setPrevPage] = useState(null)
	const [nextPage, setNextPage] = useState(null)

	const navigate = useNavigate()

  // this is unreadable, I don't know what it does
  // I believe there's a better way to handle parameters in path
	const parsePage = url => {
		if (!url) {
			return ''
		}
		return `?${url.split('?')[1]}`
	}

  // this should be in a separate file reserved for api calls
	const fetchData = pageToFetch => {
		client.get(`/pokemon${pageToFetch || ''}`).then(({ data }) => {
			setPokemons(data.results)
			setPrevPage(parsePage(data.previous))
			setNextPage(parsePage(data.next))
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleFavourite = (e, name) => {
		e.stopPropagation()
		handleFav(name)

		const favsCopy = [...favs]

		if (favsCopy.includes(name)) {
			const indexToDelete = favsCopy.findIndex(item => item === name)
			favsCopy.splice(indexToDelete, 1)
		} else {
			favsCopy.push(name)
		}

		setFavs(favsCopy)
	}

	return (
		<>
			<LinkWrapper>
				{pokemons.map(({ name, url }) => (
					<LinkItem
						key={url}
						isFav={favs.includes(name)}
						onClick={() => navigate(`/pokemon/${name}`, { replace: true })}>
						{name}
						<PokemonFavShow onClick={e => handleFavourite(e, name)}>
              {
              /* this should be a separate component that covers the star logic */
              // also, the starHalfAlt icon is wrong here
              // it should be a star outline
              }
							{favs.includes(name) ? <FaStar /> : <FaStarHalfAlt />}
						</PokemonFavShow>
					</LinkItem>
				))}
			</LinkWrapper>

      {/* buttons cover separate part of logic, it should have it's own component */}
			<BtnWrapper>
				<Button disabled={!prevPage} onClick={() => fetchData(prevPage)}>
					Prev Page
				</Button>
				<Button disabled={!nextPage} onClick={() => fetchData(nextPage)}>
					Next Page
				</Button>
			</BtnWrapper>
		</>
	)
}

export default AllPokemons
