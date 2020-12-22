import axios from 'axios'

const instance = axios.create( {
    baseURL: 'https://tinder-backend-jay.herokuapp.com/'
})

export default instance;