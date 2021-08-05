import React from 'react'
import { Link } from 'react-router-dom'


function Home() {


  return (
    <div className='button-container'>
      <Link to="./food/FoodIndex">Get Random Recipe</Link>
    </div>
  )
}

export default Home