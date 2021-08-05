import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import CountriesIndex from './components/flags/CountriesIndex'
import FoodIndex from './components/food/FoodIndex'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/CountriesIndex">
          <CountriesIndex />
        </Route>
        <Route path="/FoodIndex">
          <FoodIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App
