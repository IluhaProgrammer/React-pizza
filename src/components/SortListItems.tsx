import React, {FC, memo} from 'react';
import { useAppSelector } from '../hooks/redux';
import CategotyItem from './CategotyItem';
import {useWhyDidYouUpdate} from 'ahooks'

interface SortListItemsProps {
    value: number
    onClickCategory: (i: number) => void
}

const SortListItems:FC<SortListItemsProps> = memo( ({value, onClickCategory}) => {
    useWhyDidYouUpdate('SortListItems', {value, onClickCategory} )

    const {categories} = useAppSelector(state => state.CategoryActive)
    
    return (
        <div className='categories  ' >
            {categories.map((category, i) => 
                    <CategotyItem 
                            category={category} 
                            isActiveCategory={() => onClickCategory(category.index)}
                            i={i} 
                            isSelected={value}
                            key={category.index} 
                    />
                )}
        </div>
    );
})

export default SortListItems;