import axios from 'axios'

const countriesUrl = 'https://restcountries.eu/rest/v2/all'

export function getAllCountries() {
  return axios.get(`${countriesUrl}/name`)
}

const foodsUrl = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json'

export function getAllFoods() {
  return axios.get(`${foodsUrl}`)
}