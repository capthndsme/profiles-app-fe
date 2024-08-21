import axios, { AxiosInstance } from 'axios'

const AXIOS_TIMEOUT = 100000

export function useAxiosBase(): AxiosInstance {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
  return axios.create({
    baseURL: apiBaseUrl,
    timeout: AXIOS_TIMEOUT,
  })
}
