import React, { FC, RefObject, useRef, useState, ChangeEvent, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { buttonSearchPizza, seacrhPizza } from '../../store/reducers/InputReducer';
import debounce from 'lodash.debounce';

interface SearchProps {
    onClick: () => void
}

const SearchInput: FC<SearchProps> = ({onClick}) => {
    const { search } = useAppSelector(state => state.Input)
    const { buttonSearch } = useAppSelector(state => state.Input)
    const inputRef = useRef() as RefObject<HTMLInputElement>
    const [value, setValue] = useState<string>('') 

    const dispatch = useAppDispatch()

    const clearSearch = () => {
       dispatch(seacrhPizza(''))
       setValue('')
       inputRef.current?.focus()
    }

    const onChangeInput = useCallback( debounce((value) => {
        dispatch(seacrhPizza(value))
    }, 250), []) 

    const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChangeInput(event.target.value)
    }

    return (
        <div className='search-block' >
            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/>
            </svg>
            <input 
                    ref={inputRef}
                    value={value}
                    onChange={onChangeInput2}
                    className='search'
                    type='text' 
                    placeholder='Поиск пицц ...'
            />
            {
                search 
                    ? <svg onClick={clearSearch} className='svg' xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 48 48" width="25">
                <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/><path d="M0 0h48v48H0z" fill="none"/>
            </svg>

                    : null
            }
        </div>
    );
};

export default SearchInput;