import axios from 'axios'

const randUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export function getRandomMeal() {
  return axios.get(`${randUrl}`)
}