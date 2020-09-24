import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import {MovieDetail, Header, Reviews} from './components'
import {Home} from './pages/'
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" //use '/' to home page routing
            component={Home}
          />
          <Route path="/details/:id" component={MovieDetail} />
          <Route path="/reviews/:id" component={Reviews} />
        </Switch>
      </Router>



    )
  }
}

export default App;
