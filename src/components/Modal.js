import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Contex';
import { MainButton } from './Button';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <MainModal>
                <div className='container'>
                  <div className='row'>
                    <div
                      id='modal'
                      className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3'
                    >
                      <h5>produto adicionado ao carrinho</h5>
                      <img src={img} className='img-fluid' alt='img-product' />
                      <h3>{title}</h3>
                      <h4 className='text-main'>
                        <strong>
                          Preço: <span className='mr-1'>R$</span>
                          {price}
                        </strong>
                      </h4>
                      <div>
                        <Link to='/'>
                          <MainButton onClick={() => closeModal()}>
                            Compre Mais
                          </MainButton>
                        </Link>
                        <Link to='/cart'>
                          <MainButton cart onClick={() => closeModal()}>
                            Carrinho
                          </MainButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </MainModal>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const MainModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
