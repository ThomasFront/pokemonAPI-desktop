import React from 'react'
import { useLocation } from 'react-router-dom'
import { LayoutItem, LayoutWrapper, Wrapper } from './Layout.styles'

function Layout({ children }) {
  // use destructuring when possible
	// const { pathname } = useLocation()
	const location = useLocation()

	return (
		<>
			<Wrapper>
				<LayoutWrapper>
					<LayoutItem to='/pokemons' className={location.pathname === '/pokemons' && 'highlighted'}>
						All Pokemons
					</LayoutItem>
					<LayoutItem to='/favourites' className={location.pathname === '/favourites' && 'highlighted'}>
						Favourites
					</LayoutItem>
				</LayoutWrapper>
				{children}
			</Wrapper>
		</>
	)
}

export default Layout
