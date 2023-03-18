import axios from 'axios'

export const api = axios.create({
  // https://localhost:3000/api
  baseURL: '/api',
})
