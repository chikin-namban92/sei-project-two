import React from 'react'
import { Link } from 'react-router-dom'


function Home() {


  return (
    <>
      <header>
        <h1 className="title is-1 has-text-centered">Random Meal Generator</h1> 
        <hr />
      </header>
      <body className="background">
        <section className="container">     
          <div className='button-container'>
            <Link to="./food/FoodIndex">
              <button className="button is-centered is-medium is-light">Get Random Recipe</button>
            </Link>
          </div>
        </section>
      </body>
    </>
  )
}

export default Home