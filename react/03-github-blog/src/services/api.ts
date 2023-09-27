import axios from 'axios'

const token = import.meta.env.VITE_REACT_APP_API_TOKEN

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
