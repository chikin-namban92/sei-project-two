import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

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
        <Route path="/food/FoodIndex">
          <FoodIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App
