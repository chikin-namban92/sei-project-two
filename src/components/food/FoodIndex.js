import React from 'react'
import { getRandomMeal } from '../lib/api'

function FoodIndex() {
  const [foods, setFoods] = React.useState([])
  const [isError, setIsError] = React.useState(false)

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

  console.log(foods)
  return ( 
    <section className="section">
      <div className="container">
        {isError && <h1>Error</h1>}
        <div className="columns is-multiline">
          <div>
            <h2>{foods.strMeal}</h2>
            <h4>{foods.strArea}</h4>
            <img src={foods.strMealThumb} alt={foods.strMeal} />
            <p>{foods.strInstructions}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodIndex


