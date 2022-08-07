import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LinkItem = styled.button`
	cursor: pointer;
	font-size: 18px;
	margin: 1em 2em;
	text-decoration: none;
	color: black;
	width: 300px;
	text-align: center;
	background-color: #dcdedc;
	padding: 0.5em 1em;
	border-radius: 6px;
	box-shadow: 0 0 2px black;
	transition: background-color 0.2s;

	&:hover {
		background-color: white;
	}

	&::first-letter {
		text-transform: uppercase;
	}

	${({ isFav }) =>
		isFav &&
		css`
			background-color: yellow;
		`}
`

export const LinkWrapper = styled.div`
	margin-top: 5em;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`

export const PokemonFavShow = styled.div`
	color: #cfb53b;
	max-width: 20px;
`

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2em;
`
