import React, {FC, useState, useEffect, useRef,memo, RefObject} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSort } from '../store/reducers/CategoriesSlice';
import { IObj } from '../types/types';
import { setIsActive } from '../store/reducers/SortSlice';
import { useWhyDidYouUpdate } from 'ahooks';

const Sort:FC = memo( () => {

    const dispatch = useAppDispatch()
    const sortRef = useRef() as RefObject<HTMLDivElement> | null
    const sortSpan = useRef() as RefObject<HTMLSpanElement> | null
    const {isActive} = useAppSelector(state => state.Sorts)

    const clickSortedItem = (obj: IObj) => {
        dispatch(setSort(obj))
        dispatch(setIsActive(false))
    }

    const { sortType, sortName } = useAppSelector(state => state.CategoryActive)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as MouseEvent &  {
                path: Node[]

            }
                if(sortRef?.current && !_event.path.includes(sortRef.current)) {
                    dispatch(setIsActive(false))
                } 
            }
            document.body.addEventListener('click', handleClickOutside);

            return () => document.body.removeEventListener('click', handleClickOutside);
    }, [])

    

    return (
        <div className='sort' >
            <div className='sort-input' >
                <span ref={sortSpan} ><strong>Сортровка по</strong></span>
                <img src="/img/rect.svg" alt="rectangle" />
                <p ref={sortRef} onClick={() => dispatch(setIsActive(!isActive))}>
                    {sortName.name}
                </p>
            </div>
            {
                isActive && <ul>
                {
                    sortType.map((sort, i) => 
                            <li className={sortName.sort === sort.sort ?'active-li' :''} onClick={() => clickSortedItem(sort)} key={sort.name} >{sort.name}</li>
                        )
                }
            </ul>
            }
            
        </div>
    );
})

export default Sort;