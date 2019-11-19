import axios from 'axios'

const baseUrl = 'http://localhost:3001/submissions'

const getAll = () => {
    return axios.get(baseUrl)
}

const getById = (id) => {
    return axios.get(baseUrl + '/' +id)
}

export default {
    getAll: getAll,
    getById: getById
}