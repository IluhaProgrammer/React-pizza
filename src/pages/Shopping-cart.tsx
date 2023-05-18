import React, {FC} from 'react';
import { Link } from 'react-router-dom';

const ShoppingCart: FC = () => {
    return (
        <div className='shopping-cart' >
            <div className='shop-header' >
                <h1>Корзина пустая </h1>
                <img src='/img/smailik.svg' alt='Смайлик' />
            </div>
            <div className='shop-text' >
                <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <div className='shop-content' >
                <img src='/img/person.svg' alt='Покупатель' />
            </div>
            <Link to='/' >
            <button type='button' >Вернуться назад</button>
            </Link>
        </div>
    );
};

export default ShoppingCart;