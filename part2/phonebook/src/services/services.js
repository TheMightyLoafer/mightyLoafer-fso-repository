import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
        .then(response => response.data)
        .catch(error => {
            console.log('Error fetching data from server:', error)
        })
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request
        .then(response => response.data)
        .catch(error => {
            console.log('Error posting object to server', error)
        })
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
        .then(response => response.data)
        .catch(error => console.log('Error updating server object', error))
}

const deleteObj = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
        .catch(error => console.log('Error deleting object', error))
}

export default {
    getAll,
    create,
    update,
    deleteObj,
}
