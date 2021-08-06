import React from 'react'
import { getRandomMeal } from '../lib/api'

import FoodCard from './FoodCard'

function FoodIndex() {
  const [foods, setFoods] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !isError && !foods

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getRandomMeal()
        setFoods(response.data.meals[0])
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [])
    
  // console.log(foods)
  return ( 
    <section className="section">
      
      <div className="container">
        {isError && <h1>Error</h1>}
        {isLoading && <h1>Fetching your dinner...</h1>}
        <div className="hero-body">
          <div>
            <FoodCard key={foods.idMeal} food={foods} />           
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodIndex