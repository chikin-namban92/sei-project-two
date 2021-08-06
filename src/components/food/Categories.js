import React from 'react'
import { getAllCategories } from '../lib/api'

function Categories() {
  const [categories, setCategory] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllCategories()
        setCategory(response.data.categories)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [])

  console.log(categories)

  return ( 
    <section className="category-list">
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {isError && <h1>Error</h1>}
            {categories && categories.map(category => {
              return <>
                <div className="column is-one-quarter-desktop is-one-third-tablet">
                  <div className="card">
                    <div className="card-header">
                      <h2 className="card-header-title">{category.strCategory}</h2>
                    </div>
                    <div className="card-image">
                      <figure className="image">
                        <img src={category.strCategoryThumb} alt={category.strCategory}/>
                      </figure>
                      <div className="card-content">
                        <p className="subtitle is-6 is-marginless">{category.strCategoryDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories