import React, { Component } from 'react';
import './App.css';
import { MyProvider, MyContext } from "./Context";


export default class VehicleOverview extends Component {
render() {
  return (
      <MyContext.Consumer>
        {(value)=>{
      const {id, model, img, imgB, info, price, hp, engine, hp2, engine2} = value.detailProduct
      return (
        <React.Fragment>
          <body className="overview-body">
            <span class="s1">2020</span><span class="s2">{model}</span>
            <div className="overview-card">
            <div className="overview-thumbnail">
              <img className="overview-img" src={imgB}/>
            </div>
            <div className="overview-right">
              <h1>2020 {model}</h1>
              <div className="overview-author">
                <h4>{info}</h4>
              </div>
              <div className="overview-separator"></div>
              <p>Starting at ${price}*</p>
              <h4>Estimate Payments</h4>
              <br></br>
              <h2>{hp}-HP {engine}</h2>
              <h2>{hp2} {engine2}</h2>
              <h3>SEE MPG RATINGS</h3>
            </div>
            <div className="overview-footer">Acura</div>
            </div>
            <div className="fab"><i className="fa fa-arrow-down fa-3x"> </i></div>
          </body>
        </React.Fragment>
          )
        }}
      </MyContext.Consumer>
    )
  }
}
