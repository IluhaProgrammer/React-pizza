import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../types/types";


interface CountState {
    pizzas: IPizza[]
}

 const initialState: CountState = {
    pizzas: []
}

const PlusPizza = createSlice({
    name: 'PlusPizza',
    initialState,
    reducers: {
        addPizza(state, {payload: pizza}) {
            state.pizzas.push(pizza)
        }
    }
})

export default PlusPizza.reducer
export const {addPizza} = PlusPizza.actions