import { FetchArgs, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPizza, IProps } from '../../types/types'


const baseUrl = 'http://localhost:4100'

export const PizzaApi = createApi({
    reducerPath: 'PizzaAPI',
    tagTypes: ['Pizza'] ,
    baseQuery: fetchBaseQuery({ 
        baseUrl
    }),
    endpoints: (builder) => ({
        getPizzas: builder.query<IPizza[], IProps>({
            query: ({search, currentPage, sortName, categoryId}) => `/pizzas/?_limit=3&_page=${currentPage}&_sort=${sortName.sort}&_order=asc&q=${search}${categoryId === 0 ? '' : `&category=${categoryId}`}`,
            providesTags: ['Pizza'],
        }),
        getPizzasById: builder.query<IPizza, string | undefined>({
            query: (id) => `/pizzas/${id}`
            })
    })
})

export const {useGetPizzasQuery} = PizzaApi
export const {useGetPizzasByIdQuery} = PizzaApi