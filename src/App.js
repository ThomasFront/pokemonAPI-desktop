import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import AllPokemons from './pages/AllPokemons/AllPokemons'
import Favourites from './pages/Favourites/Favourites'
import Pokemon from './pages/Pokemon/Pokemon'

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pokemons' element={<AllPokemons />} />
					<Route path='/favourites' element={<Favourites />} />
					<Route path='/pokemon/:pokemonId' element={<Pokemon />} />
				</Routes>
			</Layout>
		</>
	)
}

export default App
