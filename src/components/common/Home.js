import React from 'react'
import { Link } from 'react-router-dom'


function Home() {


  return (
    <body className="background">
      <div className="logo-container"></div>
      <div className='button-container has-text-centered'>
        <Link to="./food/FoodIndex">
          <button className="button is-large is-danger">Get Random Recipe</button>
        </Link>
      </div>
    </body>
  )
}

export default Home