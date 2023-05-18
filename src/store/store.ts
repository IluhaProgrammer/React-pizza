import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import PlusPizza from "./reducers/PlusPizza";
import CategoriesSlice from "./reducers/CategoriesSlice";
import SortSlice from "./reducers/SortSlice";
import { PizzaApi } from "./api/PizzaApi";
import InputSlice from './reducers/InputReducer'
import CartPizzaSlice from "./reducers/CartPizzaSlice";

const reducers = combineReducers({
    Pizza: PlusPizza,
    CategoryActive: CategoriesSlice,
    Sorts: SortSlice,
    Input: InputSlice,
    [PizzaApi.reducerPath] : PizzaApi.reducer,
    CartP: CartPizzaSlice,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(PizzaApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type Dispath = typeof store.dispatch