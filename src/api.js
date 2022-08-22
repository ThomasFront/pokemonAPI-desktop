import axios from 'axios'

export const client = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
})

// consider putting api calls in here
