import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: monospace, sans-serif;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input,button {
		border: none;
	}

	button {
		opacity: .8;
	}

	button:hover, select:hover {
		cursor: pointer;
	}

	button:hover {
		opacity: 1;
	}

	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
`

export default Style
