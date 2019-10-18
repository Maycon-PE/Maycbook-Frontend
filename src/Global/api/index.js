import axios from 'axios'

export const baseURL = 'http://localhost:8888'

export default axios.create({
	baseURL
})
