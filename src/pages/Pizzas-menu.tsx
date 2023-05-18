import React, {useEffect, useCallback, FC} from 'react';
import '../styles/main.scss'
import { IPizza } from '../types/types';
import { useGetPizzasQuery } from '../store/api/PizzaApi';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { isActiveCategory, setCurrentPage } from '../store/reducers/CategoriesSlice';
import {NoPizzas, Error, Pagination, Sort, Skeleton, PizzaItem, SortListItems} from '../components/allComp'

interface PizzasProps {
  onClick: () => void
}

const  PizzasMenu:FC<PizzasProps> = ({onClick}) => {

  const { categoryId, sortName, currentPage } = useAppSelector(state => state.CategoryActive)
  const dispatch = useAppDispatch()

  const {search} = useAppSelector(state => state.Input)

  const {data: pizzas, refetch, isFetching: pizzasFetching, error} = useGetPizzasQuery({search, currentPage, sortName, categoryId})

  const onChangePage = useCallback((number: number) => {
    dispatch(setCurrentPage(number))
  }, [])

  const onClickCategory = useCallback((i: number) => {
      dispatch(isActiveCategory(i))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    refetch()
  }, [search, pizzas, sortName])

  import('../components/Utils/getPizzasFromLS').then(add => {
    add.math(5, 12)
  })

  return (
      <div className='main' >
          <div className='sorted-string' >
        <SortListItems value={categoryId} onClickCategory={onClickCategory} />
        <Sort/>
      </div>
      <div className='allPizzas' >
        <h1>Все пиццы</h1>
        </div>
        <div className='pizza-parent' >
          {
            error 
                ? <><Error/></>

                : pizzas?.length === 0 
                            ? <NoPizzas/>

                          : <div className='pizzas' >
          {
            pizzasFetching
                  ? <>
                    {[...Array(12)].map( (skel, index) => 
                        <Skeleton key={index} />
                      )}
                  </> 
                      :<>
                      {pizzas && pizzas.map((pizza: IPizza) => 
                        <PizzaItem pizza={pizza} key={pizza.id} />
                      )}
                      </>
            
          }
        </div>
          }
        
       
        </div>
         <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
  );
}

export default PizzasMenu;