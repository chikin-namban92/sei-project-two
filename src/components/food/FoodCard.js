import { Link } from 'react-router-dom'

function FoodCard({ food }) {
  return (
    <body className="background">
      <section className="hero">
        <div className="hero-head">
          <div className="column has-text-centered">
            <h2 className="title is-2 is-white">{food.strMeal}</h2>
            <div className="container is-small">
              <div className="image is-centered is-4by3">
                <img src={food.strMealThumb} alt={food.strMeal} />
              </div>
              <div className="column has-text-centered">
                <h2 className="subtitle is-4 is-white">{food.strArea}</h2>
                <button className="button is-centered is-medium is-light">
                  <Link to={`/food/${food.idMeal}`}>Scran It</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    // <section className="hero is-dark is-medium">
    //   <div className="hero-head">
    //     <div className="column has-text-centered is-medium">
    //       <h2 className="title is-1">{food.strMeal}</h2>
    //       <div className="container is-small">
    //         <div className="image is-centered image is-4by3">
    //           <img src={food.strMealThumb} alt={food.strMeal} />
    //         </div>
    //         <div className="column has-text-centered">
    //           <h2 className="subtitle is-4">{food.strArea}</h2>
    //           <button className="button is-centered is-medium is-light">
    //             <Link to={`/food/${food.idMeal}`}>Scran It</Link>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default FoodCard