import React, {FC} from 'react';
import { ICategory } from '../types/types';

interface CategoryItemProps {
    category: ICategory
    i: number
    isActiveCategory: (a:number) => void
    isSelected: number
}

const CategotyItem: FC<CategoryItemProps>= ({ category, i, isActiveCategory, isSelected}) => {
    


    return (
        <li onClick={() => isActiveCategory(category.index)} className={isSelected === i ? 'cat active'  : 'cat'} >
            {category.text} 
        </li>
    );
};

export default CategotyItem;