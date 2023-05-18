import { createSlice } from "@reduxjs/toolkit";
import { ICartPizza } from "../../types/types";
import { getPizzasFormLS, getTotalPriceFromLS } from "../../components/Utils/getPizzasFromLS";

interface CartPizza {
    CartPizzas: ICartPizza[]
    totalPrice: number
}

const {CartPizzas, totalPrice} = getPizzasFormLS()

const initialState: CartPizza = {
    CartPizzas: CartPizzas, 
    totalPrice: totalPrice,
}

const CartPizzaSlice = createSlice({
    name: 'CartPizza',
    initialState,
    reducers: {
        addCartPizzas(state, {payload: pizza}) {
            const findPizza = state.CartPizzas.find(obj => obj.id === pizza.id)

            if (findPizza) {
                findPizza.count++
            } else {
                state.CartPizzas.push({
                    ...pizza,
                    count: 1
                })
            }

            state.totalPrice = getTotalPriceFromLS(state.CartPizzas);
        },
        removeCartPizzas(state, {payload: id}) {
            state.CartPizzas =  state.CartPizzas.filter(obj => obj.id !== id)
        },
        removeAllPizzas(state) {
            state.CartPizzas = []
            state.totalPrice = 0
        },
        minusItem(state, {payload: id}) {
            const findPizza = state.CartPizzas.find(obj => obj.id === id)

            if(findPizza) {
                if(findPizza.count <= 1) {
                    findPizza.count = 1
                } else {
                    findPizza.count--
                    state.totalPrice = state.totalPrice - findPizza.cost
                }
                
            }
         }
    }
})

export default CartPizzaSlice.reducer
export const {addCartPizzas, removeAllPizzas, removeCartPizzas, minusItem} = CartPizzaSlice.actions