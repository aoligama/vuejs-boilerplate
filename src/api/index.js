import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: API_URL,
})

export default api
