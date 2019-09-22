const validOrError = (type, value) => {
	if (!type.length || !value.length) throw null

	if (typeof type !== 'string') {
		throw null
	} else {
		type = type.toLowerCase()
	}

	switch (type) {
		case 'email':
			if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) throw 'Email inválido!!!'
			break;
		case 'password':
			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,14}$/.test(value)) throw 'A senha deve conter no minímo 3 carácteres entre letras e números!!!'
			break;
		case 'name':
			if (!/^[a-záàâãéèêíïóôõöúçñ ]+$/i.test(value)) throw 'Nome inválido!!!'
			break;
		case 'genre':
			if (value !== 'm' && value !== 'f') throw 'Gênero inválido!!!'
			break;
		default:
			throw null
	}
}

export default validOrError
