import { ICartPizza } from "../../types/types"

export const getPizzasFormLS = () => {
    const data = localStorage.getItem('CartPizzas')
    const CartPizzas = data ? JSON.parse(data) : []
    const totalPrice = getTotalPriceFromLS(CartPizzas)

    return {
        CartPizzas,
        totalPrice
    }
}

export const getTotalPriceFromLS = (CartPizzas: ICartPizza[]) => {
    return CartPizzas.reduce((sum, obj) => (obj.cost * obj.count) + sum, 0) 
}

export const math = (a:number, b:number) => {
    console.log(111)
    return a + b
}