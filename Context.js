import React, {Component } from 'react';
import { carInventory } from './data';

export const MyContext = React.createContext();

export class MyProvider extends Component {
state ={
  products: []
}

componentDidMount() {
  this.setProducts();
}
setProducts = () => {
  let tempProducts = [];
  carInventory.forEach(item =>{
    const singleItem = {...item};
    tempProducts = [...tempProducts,singleItem];
  })
  this.setState(()=>{
    return {products:tempProducts}
  })
}
getItem = (id) => {
  const product = this.state.products.find(item => item.id === id);
  return product;
}
handleDetail = (id) =>{
  const product = this.getItem(id);
  this.setState(()=>{
    return {detailProduct:product}
  })
}

  render() {
    return (
      <MyContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
