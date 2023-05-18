import { createSlice } from "@reduxjs/toolkit";

interface inputState {
    search: string 
    buttonSearch: string
    currentPage: number
}

const initialState: inputState = {
    search: '',
    buttonSearch: '',
    currentPage: 1
}

const InputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        seacrhPizza(state, {payload: value}) {
            state.search = value
        },
        buttonSearchPizza(state, {payload: search}) {
            state.buttonSearch = search
        },
        setCurrentPage(state, {payload: pageCount}) {
            state.currentPage = pageCount
        },
    }
})

export default InputSlice.reducer
export const {seacrhPizza, buttonSearchPizza, setCurrentPage} = InputSlice.actions