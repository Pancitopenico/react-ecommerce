import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../Contex';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProdutDiv className='col-9 mx-auto my-3 col-md-6 col-lg-3'>
        <div className='card'>
          <ProductConsumer>
            {value => (
              <div
                onClick={() => value.handleDetail(id)}
                className='img-container p-5'
              >
                <Link to='/details'>
                  <img className='card-img-top' src={img} alt='product img' />
                </Link>
                <button
                  disabled={inCart ? true : false}
                  className='cart-btn'
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className='text-capitalize mb-0' disabled>
                      No Carrinho
                    </p>
                  ) : (
                    <i className='fas fa-cart-plus' />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='font-italic mb-0 text-main'>
              <span className='mr-2'>
                <span className='mr-1'>R$</span>
                {price}
              </span>
            </h5>
          </div>
        </div>
      </ProdutDiv>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProdutDiv = styled.div`
  .card {
    border: transparent;
    transition: all 500ms linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 500ms linear;
  }
  &:hover {
    .card {
      box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
    }
    .card-footer {
      background: rgb(200, 200, 200);
    }
  }

  .card-img-top {
    transition: all 500ms linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    &:hover .card-img-top {
      transform: scale(1.2);
    }
    &:hover .cart-btn {
      transform: translate(0, 0);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3rem 0.5rem;
    background: var(--secondaryColor);
    border: none;
    color: var(--mainWhite);
    font-size: 1.5rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 750ms linear;
    &:hover {
      color: var(--primaryColor);
      cursor: pointer;
    }
  }
`;
