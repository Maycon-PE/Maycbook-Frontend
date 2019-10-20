import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {
	Input as InputStyled,
	IconSearch as IconSearchStyled,
	Container as ContainerStyled
} from './styles'

const Search = ({ responsived }) => {
	const [term, setTerm] = useState('')
	const [dropSearch, setDropSearch] = useState(false)

	useEffect(() => {
		dropSearch && document.getElementById('$input_search$').focus()
	}, [dropSearch])

	const keyDown = ({ keyCode }) => {
		if (keyCode === 13) {
			return term.length > 0 && alert(term)
		}

		if (keyCode === 27) {
			dropSearch && (() => {
				setDropSearch(false)
				setTerm('')
			})()
		}
	}

	const change = ({ target }) => setTerm(target.value)

	const toggleDivSearch = () => {
		setDropSearch(!dropSearch)
	}

	return responsived ? (
		<ContainerStyled>
			<IconSearchStyled active={ dropSearch } onClick={ toggleDivSearch }><i className={`fa fa-search-${ dropSearch ? 'minus' : 'plus' }`}></i> Pesquisar</IconSearchStyled>
			{ dropSearch && <InputStyled id='$input_search$' responsived={ true } type='search' maxLength='25' onChange={ change } onKeyDown={ keyDown } placeholder='Pesquisar' />}
		</ContainerStyled>
	) : (<InputStyled responsived={ false } type='search' maxLength='25' onChange={ change } onKeyDown={ keyDown } placeholder='Pesquisar' />)
}

const mapStateToProps = state => ({ responsived: state.responsived })

export default connect(mapStateToProps)(Search)
