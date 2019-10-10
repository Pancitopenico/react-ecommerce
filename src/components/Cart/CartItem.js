import React from 'react';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className='row my-2 text-center text-capitalize'>
      <div className='col-10 col-lg-2 mx-auto'>
        <img
          className='img-fluid'
          style={{ width: '5rem', height: '5rem' }}
          src={img}
          alt='product-img'
        />
      </div>
      <div className='col-10 col-lg-2 mx-auto'>
        <span className='d-lg-none'>Produto :</span> {title}
      </div>
      <div className='col-10 col-lg-2 mx-auto'>
        <span className='d-lg-none'>Preço :</span> {price}
      </div>
      <div className='col-10 col-lg-2 my-2 mx-auto my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              className='pointer btn btn-black mx-1'
              onClick={() => decrement(id)}
            >
              <i className='fas fa-minus'></i>
            </span>
            <span className='mx-1 btn btn-black'>{count}</span>
            <span
              className='pointer btn btn-black mx-1'
              onClick={() => increment(id)}
            >
              <i className='fas fa-plus'></i>
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 col-lg-2 mx-auto'>
        <div className='trash-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash-alt'></i>
        </div>
      </div>
      <div className='col-10 col-lg-2 mx-auto'>
        <span className='d-lg-none'>Total do Item : R$</span> {total}
      </div>
    </div>
  );
}
