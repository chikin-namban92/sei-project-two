import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import FoodIndex from './components/food/FoodIndex'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import FoodShow from './components/food/FoodShow'
import Categories from './components/food/Categories'


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food/FoodIndex">
          <FoodIndex />
        </Route>
        <Route path="/food/:foodId">
          <FoodShow />
        </Route>
        <Route path="/common/Categories">
          <Categories />
        </Route> 
      </Switch>
    </BrowserRouter>
  )
}
export default App
