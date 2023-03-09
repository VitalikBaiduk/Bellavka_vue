import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rest.bellavka.by/api/v1/products/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const API = {
  getProduct: (params: string) => {
    return instance.get(params, { data: {} })
  }
}
