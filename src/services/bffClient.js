
import axios from 'axios'

const bffClient = axios.create({
  baseURL: import.meta.env.VITE_BFF_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default bffClient
