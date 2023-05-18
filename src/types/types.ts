export interface IPizza {
    url: string
    cost: number
    name: string
    id: number
    sizes: number[]
    types: string[]
    category: number
    raiting: number
}
export interface ICategory {
    text: string
    index: number
}
export interface ILi {
    name: string
}
export interface IProps {
    search: string
    currentPage: number
    sortName: IObj
    categoryId: number
}

export  interface IArray {
    index: number
    name: string
    sort: string
}
export interface IObj {
    name: string
    sort: string
}
export interface ICartPizza {
    name: string
    cost: number
    type: string
    size: string
    id: number
    url: string
    count: number
}