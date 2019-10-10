import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainButton } from './Button';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <MainNav className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='logo' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Produtos
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <MainButton>
            <span className='mr-2'>
              <i className='fas fa-cart-plus'></i>
            </span>
            Meu Carrinho
          </MainButton>
        </Link>
      </MainNav>
    );
  }
}

const MainNav = styled.nav`
  background: var(--primaryColor);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: all 1s ease-in-out;
    &:hover {
      color: var(--secondaryColor) !important;
    }
  }
`;
