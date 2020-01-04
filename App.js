import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';
import Vehicles from './Vehicles'
import VehicleList from './VehicleList'
import ShoppingTools from './ShoppingTools'
import VehicleOverview from './VehicleOverview'
import { MyProvider, MyContext } from "./Context";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/VehicleList" component={VehicleList} />
              <Route path="/VehicleOverview" component={VehicleOverview} />
            </Switch>
          </div>
        </Router>
      </MyProvider>
    );
  }
}

export default App;
