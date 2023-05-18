import React, {useEffect, useState} from 'react';
import './styles/main.scss'
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { buttonSearchPizza } from './store/reducers/InputReducer';
import { setIsActive } from './store/reducers/SortSlice';

function App() {
  const {search} = useAppSelector(state => state.Input)
  const dispatch = useAppDispatch()
  const searchReverse = () => {
    console.log(dispatch(buttonSearchPizza(search)))
  }

  return (
    <Router>
      <div className='App' >
        <Header onClick={searchReverse} />
        <AppRouter onClick={searchReverse} />
        </div>
      </Router>
  );
}

export default App;
