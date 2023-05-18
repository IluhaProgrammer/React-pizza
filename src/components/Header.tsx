import React, {FC, useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import SearchInput from './Search/SearchInput';

interface HeaderProps {
  onClick: () => void
}

const Header:FC<HeaderProps> = ({onClick}) => {
    const {pathname} = useLocation()
    const [isMounted, setIsMounted] = useState<boolean>(false)

    const {totalPrice, CartPizzas} = useAppSelector(state => state.CartP)
    const totalCount = CartPizzas.reduce((sum, item) => {
      return item.count + sum
    }, 0)

    useEffect(() => {
      if(isMounted) {
        const json = JSON.stringify(CartPizzas)
        localStorage.setItem('CartPizzas', json)
      }
      setIsMounted(true)
    }, [CartPizzas])

    return (
        <header className='header' >
          <Link className='link' to='/' >
        <div className='logo' >
          <img className='logotipe' src='/pizzas/logo.svg' alt='logo' />
          <div className='logo-text' >
            <h1>React Pizza</h1>
            <span>Самая вкусная пицца во вселенной</span>
          </div>
          </div>
          </Link>
          
          {
            pathname !== '/shop-cart' && <>
            <SearchInput onClick={onClick} />
            <Link to='shop-cart'>
          <div className='buy-button' >
            <p>{totalPrice} Руб</p>
            <div className='cart-button' >
              <img src='/pizzas/shopping-cart.svg' />
              <span>{totalCount}</span>
            </div>
          </div>
          </Link>
          </>
          }
          
    </header>

    );
};

export default Header;