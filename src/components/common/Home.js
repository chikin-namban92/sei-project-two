import React from 'react'
import { getAllCountries } from '../lib/api'
import { Link } from 'react-router-dom'

function CountriesIndex() {
  const [countries, setCountries] = React.useState(null)
  const [region, setRegion] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllCountries()
      setCountries(res.data)
    }
    getData(countries)
  })

  function filterCountries() {
    return countries.filter(country => {
      return (country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (country.region === region || region === 'All')
      )
    })
  }

  function handleRegionChange(e) {
    setRegion(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <main>
      <header>
        <form className="search">
          <input
            className="input"
            placeholder="Search"
            onChange={handleSearch} />
        </form>

        <select className="regions" defaultValue="All" onChange={handleRegionChange}>
          <option></option>
          <option>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </header>

      <ul className="countries">
        {!countries ? (
          <h2>...Loading</h2>
        ) : (
          filterCountries().map(country => 
            <Link to="/src/components/food/FoodIndex" key={country.name}>
              <li>
                <h2>{country.name}</h2>
                <h3>{country.nativeName}</h3>
                <img src={country.flag} alt={country.name} />
              </li>
            </Link>
          )
        )
        }
      </ul>
    </main>
  )
}

export default CountriesIndex