import React, { FC, lazy, } from 'react';
import {Routes, Route } from 'react-router-dom';
import PizzasMenu from '../pages/Pizzas-menu';
import  Loadable  from 'react-loadable';

const FullShopCart = Loadable({
    loader: () => import(/* webpackChunkName: 'Cart' */ '../pages/Full-Shopping-cart'),
    loading: () => <div>Идет загрузка корзины ...</div>,
})

const FullPizza = Loadable({
    loader: () => import(/* webpackChunkName: 'FullPizza' */ '../pages/FullPizza'),
    loading:() => <div>Идет загрузка пиццы ...</div>,
})

const Error = Loadable({
    loader: () => import(/* webpackChunkName: 'Error' */ '../components/Error/Error'),
    loading: () =>  <div>Идет загрузка ...</div>
})

interface AppProps {
    onClick: () => void
}

const AppRouter: FC<AppProps> = ({onClick}) => {
    return (
        <Routes>
            <Route path='/pizzas-menu' element={<PizzasMenu onClick={onClick} />} />
            <Route path='*' element={ <Error/>}/>
            <Route path='/' element={<PizzasMenu onClick={onClick} />}/>
            <Route path='/pizza/:id' element={ <FullPizza/> }/>
            <Route path='/shop-cart' element={<FullShopCart/>}/>
        </Routes>
    );
};

export default AppRouter;