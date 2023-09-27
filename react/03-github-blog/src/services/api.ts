import axios from 'axios'

const token =
  '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'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
