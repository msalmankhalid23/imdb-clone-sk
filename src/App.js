import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { MovieDetail, Header, Reviews } from './components'
import { Home, Favorites } from './pages/'
import { MovieProvider } from './context/MovieState'
import {FiltersProvider} from './context/FiltersState'
require('dotenv').config()

const App = () => {
  return (
   
      <MovieProvider>
      <FiltersProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" //use '/' to home page routing
              component={Home}
            />
            <Route path="/details/:id" component={MovieDetail} />
            <Route path="/reviews/:id" component={Reviews} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
        </FiltersProvider>
      </MovieProvider>
 
  )
}

export default App;
