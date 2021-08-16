import React from 'react'
import { getMealFromId } from '../lib/api'
import { useParams } from 'react-router'

function FoodShow() {
  const { foodId } = useParams()
  const [food, setFood] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !isError && !food

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMealFromId(foodId)
        setFood(response.data.meals[0])
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [foodId])

  console.log(food)
  console.log(foodId)

  return (

    <body className="background">
      <section className="section">
        <div className="container">
          {isError && <h1>Error</h1>}
          {isLoading && <h1>Fetching your dinner...</h1>}
          {food && (
            <div>
              <h2 className="title is-white is-1 has-text-centered">{food.strMeal}</h2>
              <hr />
              <h4 className="subtitle is-white is-3 has-text-centered">{food.strArea}</h4>
              <div className="image is-centered image is-128x128">
                <img src={food.strMealThumb} className="specific-food" alt={food.strMeal} />
              </div>
              <hr />
              <p className="instuctions is-white">{food.strInstructions}</p>
            </div>
          )}
        </div>
      </section>
    </body>

  )
}

export default FoodShow