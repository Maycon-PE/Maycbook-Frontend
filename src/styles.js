import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input,button {
		border: none;
	}

	button:hover, select:hover {
		cursor: pointer;
	}

	body {
		margin: 0;
		padding: 0;

		font-family: monospace, sans-serif;
	}
`

export default Style
