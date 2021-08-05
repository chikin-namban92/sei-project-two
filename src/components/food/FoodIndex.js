import React from 'react'
import { getAllFoods } from '../lib/api'

function FoodIndex() {
  const [foods, setFoods] = React.useState([])
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllFoods()
        setFoods(response.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [])

  return ( 
    <section className="section">
      <div className="container">
        {isError && <h1>Error</h1>}
        <div className="columns is-multiline">
          {foods && foods.map(food => (
            <div key={food.product._id}>
              <h1>{food.product.name}</h1>
              <h2>{food.product.origin}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodIndex