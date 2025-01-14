import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 col-sm-8 text-center text-capitalize mt-2 ml-sm-5 ml-md-auto'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => {
                  clearCart();
                }}
              >
                limpar carrinho
              </button>
            </Link>
            <h5>
              <span className='text-title'>Subtotal:$ {cartSubTotal}</span>
            </h5>
            <h5>
              <span className='text-title'>Frete:$ {cartTax}</span>
            </h5>
            <h5>
              <span className='text-title'>Total:$ {cartTotal}</span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
