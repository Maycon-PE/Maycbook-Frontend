
export default function(type, value) {

	if (typeof type !== 'string')	throw null

	if (!type.length || !value.length) throw null	

	type = type.toLowerCase()

	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,14}$/

	const nameRegex = /^[a-záàâãéèêíïóôõöúçñ ]+$/i

	switch (type) {
		case 'email':
			if (!emailRegex.test(value)) throw 'Email inválido!!!'
			break;
		case 'password':
			if (!passwordRegex.test(value)) throw 'A senha deve conter no minímo 3 carácteres entre letras e números!!!'
			break;
		case 'name':
			if (!nameRegex.test(value)) throw 'Nome inválido!!!'
			break;
		case 'genre':
			if (!['m', 'f'].includes(value)) throw 'Gênero inválido!!!'
			break;
		default:
			throw null
	}
}
