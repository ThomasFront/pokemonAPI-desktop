import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: silver;
    font-family: 'Roboto', sans-serif;
}

.highlighted {
    color: #4DEB66;
    transform: translateY(-10%);
}
`
