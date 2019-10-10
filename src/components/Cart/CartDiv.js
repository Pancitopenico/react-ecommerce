import React, { Component } from 'react';

export default class CartDiv extends Component {
  render() {
    return (
      <div className='container-fluid text-center d-none d-lg d-lg-block'>
        <div className='row'>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Products</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Nome</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Preço</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Quantidade</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>remove</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>total</p>
          </div>
        </div>
      </div>
    );
  }
}
