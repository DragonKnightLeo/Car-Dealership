import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import VehiclesHome from "./VehiclesHome"
import Footer from './Footer'
import { MyProvider, MyContext } from "./Context";
import bg from './images/bg.jpg'
import grand from './images/grand.jpg'


class Home extends Component {

  render() {
    return (
      <section>
          <img src={grand} className="grandview" alt="Grandview"></img>
          <div className="grandview-title">
            <h1>New Luxury Cars</h1>
            <p>Lease To Own Your New Vehicle</p>
          </div>
          <img src={bg} className="background"></img>
          <div className="featuretitle"><h1>Featured Vehicles</h1></div>
            <div className="cars-card">
              <MyContext.Consumer>
                {value => {
                  return value.products.map(product => {
                    return <VehiclesHome key={product.id} product=
                    {product} />
                  })
                }}
              </MyContext.Consumer>
            </div>
        <Footer />
    </section>
    )
  }
}

export default Home;
