import React, { Component } from "react"
import './App.css';
import Vehicles from "./Vehicles"
import Sort from './Sort';
import { MyProvider, MyContext } from "./Context";

export default class VehicleList extends Component {
  render() {
      return (
        <React.Fragment>
          <Sort />
          <div className="vehicles">
            <div className="showcase">
                  <MyContext.Consumer>
                    {value => {
                      return value.products.map(product => {
                        return <Vehicles key={product} product=
                        {product} />
                      })
                    }}
                  </MyContext.Consumer>
              </div>
            </div>
        </React.Fragment>
      )
    }
  }
