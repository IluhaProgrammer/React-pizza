import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArray, ICategory, IObj } from "../../types/types";

interface InitialState {
    categories: ICategory[]
    categoryId: number
    sortType: IArray[]
    sortName: IObj
    currentPage: number
}

const initialState: InitialState = {
    categories: [
        {index: 0, text: 'Все'},
        {index: 1, text: 'Мясная'},
        {index: 2, text: 'Вегитарианская'},
        {index: 3, text: 'Гриль'},
        {index: 4, text: 'Острые'},
    ],
    categoryId: 0,
    sortType: [
        {index: 0, name: 'популярности', sort: 'raiting'},
        {index: 1, name: 'цене', sort: 'cost'},
        {index: 2, name: 'алфавиту', sort: 'name'},
    ],
    sortName: {
        name: 'популярности',
        sort: 'raiting'
    },
    currentPage: 1
}

const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        isActiveCategory(state, {payload: value}) {
            state.categoryId = value
        },
        setSort(state, {payload: sortName}) {
            state.sortName = sortName
        },
        setFilters(state, {payload: obj}) {
            state.currentPage = obj.currentPage;
            state.sortName.sort = obj.sort.sort;
            state.sortName.name = obj.sort.name;
        },
        setCurrentPage(state, {payload: pageCount}) {
            state.currentPage = pageCount
        },
    }
})

export default CategoriesSlice.reducer
export const {isActiveCategory, setSort, setCurrentPage, setFilters} = CategoriesSlice.actions