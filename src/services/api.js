import axios from 'axios'
const api = axios.create({
    baseURL:'http://myipnetwork:3333'
})
export default api;
