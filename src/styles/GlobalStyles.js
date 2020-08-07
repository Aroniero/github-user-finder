import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

  body{
		font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  a {
		text-decoration: none;
  	text-align: center;
	}

`;

export default GlobalStyle;
