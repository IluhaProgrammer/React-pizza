import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { removeAllPizzas } from '../store/reducers/CartPizzaSlice';
import ShoppingCart from './Shopping-cart';
import {CartPizzaItem} from '../components/allComp'

const FullShopCart:FC = () => {
    const dispatch = useAppDispatch()
    const {CartPizzas, totalPrice} = useAppSelector(state => state.CartP)
    const totalCount = CartPizzas.reduce((sum, obj) => obj.count + sum, 0)

    const onClickRemoveAll = () =>  {
        if(window.confirm('Are you sure to delete all pizzas?')) {
            dispatch(removeAllPizzas())
        }
    }

    return (
        <>
        {
            CartPizzas.length <= 0
                        ? <ShoppingCart/>

                        :<div className='full-cart' >
            <div className='full-header' >
                <div className='full-s' >
                <img src='/img/full-cart.svg' alt='shopping-cart' />
                <h1>Корзина :</h1>
                </div>
                <div onClick={onClickRemoveAll} className='delete-cart' >
                    <img src='/img/delete-cart.svg' alt='delete-all' />
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className='full-content' >
                {
                    CartPizzas.map(pizza => 
                        <CartPizzaItem key={pizza.id} pizza={pizza} />
                        )
                }
            </div>
            <div className='total-price' >
                <div className='total-left' >
                    <span>Всего пицц : <strong>{totalCount} шт.</strong></span>
                </div>
                <div className='total-right' >
                    <p>Сумма заказа: <span><strong>{totalPrice} Руб</strong></span></p>
                </div>
            </div>
            <div className='total-buttons' >
                <Link to='/' >
                <button className='exit' >Вернуться назад</button>
                </Link>
                <Link to='/' >
                <button className='open' >Оформить сейчас</button>
                </Link>
            </div>
        </div>
        }
        </>
        
    );
};

export default FullShopCart;