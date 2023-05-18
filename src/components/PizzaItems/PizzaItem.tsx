import React, {FC, useState, useEffect} from 'react';
import { IPizza } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addCartPizzas } from '../../store/reducers/CartPizzaSlice';
import { Link } from 'react-router-dom';

interface PizzaItemProps {
    pizza: IPizza
}

const PizzaItem: FC<PizzaItemProps>= ({pizza}) => {

  const[isTyped, setIsTyped] = useState<number>(0)
  const[isSized, setIsSized]= useState<number>(0)
  const typesName = ['тонкое', 'традиционное']
  const sizes = ['26см', '30см', '40см']

  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.CartP.CartPizzas.find(obj => obj.id === pizza.id))
  const addCount = count ? count.count : 0

  const onClickAdd = () => {
    const item = {
      id: pizza.id,
      name: pizza.name,
      cost: pizza.cost,
      url: pizza.url,
      type: typesName[isTyped],
      size: pizza.sizes[isSized]
    }

    dispatch(addCartPizzas(item))
  }


    return (
        <div className='card' >
          <Link to={`/pizza/${pizza.id}`} >
          <div className='card-text' >
            <img src={pizza.url} alt="pizza1" />
            </div>
            </Link>
            <h3>{pizza.name}</h3>
          <div className='options' >
            <div className='main-optiosn' >
              <ul className='opt1' >
                {
                  pizza.types.map((type, i) => 
                      <li key={type} onClick={() => setIsTyped(i)} className={isTyped === i ?'li active2' : 'li' } ><strong>{type}</strong></li>
                    )
                }
              </ul>
              </div>
            <div className='last-options' >
            <ul className='opt' >
              {
                pizza.sizes.map((size, i) => 
                    <li key={size} onClick={() => setIsSized(i)} className={isSized === i ?'li active2':'li'}><strong>{size}см</strong></li>
                  )
              }
            </ul>
            </div> 
            </div> 
            <div className='price' >
              <span className='span' ><strong>от {pizza.cost} Р</strong></span>
              <button onClick={onClickAdd}  className='button-buy'>
                <svg  width={12} height={12}  viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path className='path' d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z' fill='#fe5f1e' />
                </svg>
                <span>Добавить</span>
                { addCount > 0 ?<p>{addCount}</p> : null }
              </button>
            </div>
            
        </div>
    );
};

export default PizzaItem;