import { createSlice } from "@reduxjs/toolkit";

interface SortsState {
    sorts: string[]
    isActive: boolean
}

const initialState: SortsState = {
    sorts: ['популярности', 'цене', 'алфавиту'],
    isActive: false
}

const SortSlice = createSlice({
    name: 'Sort',
    initialState,
    reducers: {
        setIsActive(state, {payload: prop}) {
            state.isActive = prop
        }
    }
})

export default SortSlice.reducer
export const {setIsActive} = SortSlice.actions