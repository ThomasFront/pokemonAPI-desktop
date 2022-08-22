import styled from 'styled-components'

// use rems for padding
export const Button = styled.button`
	cursor: pointer;
	padding: 0.5em 1em;
	border-radius: 6px;
	margin: 0 2em;
	border: 1px solid black;
	background-color: #c9c7c7;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f1f1f1;
	}
`
