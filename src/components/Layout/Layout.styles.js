import { Link } from 'react-router-dom'
import styled from 'styled-components'

// either the name is incorrect or this bottom margin
// I'd expect a layout wrapper to be a container for page content
// so it should have some padding.
// I think this is a pageHeaderWrapper
export const LayoutWrapper = styled.nav`
	margin: 0 auto 32px;
	max-width: 1200px;
	width: 100%;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	box-shadow: 0 0 10px black;
	background-color: #333;
	color: #fff;
	height: 60px;
`

// this font size should be a rem value
export const LayoutItem = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-size: 25px;
	font-weight: bold;
	transition: color 0.2s, transform 0.2s;
	color: white;

	&:hover {
		color: gray;
	}
`

export const Wrapper = styled.div`
	margin: 0px auto;
	max-width: 1200px;
	width: 100%;
`
