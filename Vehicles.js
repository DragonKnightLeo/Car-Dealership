import React, { Component } from 'react';
import './App.css';
import { MyProvider, MyContext } from "./Context";
import { Link } from 'react-router-dom';


class Vehicles extends Component {
  render() {
    const { id, model, img, imgB, sedan } = this.props.product
    return (
        <div className="card">
          <MyContext.Consumer>
            {(value) => (<div className=""
            onClick={() =>{
              value.handleDetail(id)
            }}>
            <Link to="/VehicleOverview">
              <img src={img} style={{ height: "300px", width: "350px" }} alt="product"/>
            </Link>
            </div>)}
          </MyContext.Consumer>
        </div>
    )
  }
}

export default Vehicles;
