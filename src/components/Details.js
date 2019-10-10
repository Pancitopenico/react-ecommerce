import React, { Component } from 'react';
import { ProductConsumer } from '../Contex';
import { Link } from 'react-router-dom';
import { MainButton } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            price,
            company,
            img,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-main my-5'>
                  <h1> {title} </h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6'>
                  <img src={img} className='img-fluid' alt='product-img' />
                </div>
                <div className='col-10 mx-auto col-md-6 text-capitalize'>
                  <h3>Modelo: {title}</h3>
                  <h4 className='text-title  text-uppercase text-muted my-3'>
                    Marca: <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-main'>
                    <strong>
                      Preço: <span className='mr-1'>R$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    Informações:
                  </p>
                  <p className='text-muted lead'>{info}</p>
                  <div>
                    <Link to='/'>
                      <MainButton>Voltar aos produtos</MainButton>
                    </Link>
                    <MainButton
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'No Carrinho' : 'Adicionar ao Carrinho'}
                    </MainButton>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
