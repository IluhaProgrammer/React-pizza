import React, {FC, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPizzasByIdQuery } from '../store/api/PizzaApi';
import Error from '../components/Error/Error';
import MyLoader from '../components/Skel';

const FullPizza: FC = () => {

    const {id} = useParams()
    const {data: pizza, isFetching, error, refetch} = useGetPizzasByIdQuery(id)

    useEffect(() => {
        console.log(pizza)
        refetch()
    }, [])

    return (
        <div className='full-pizza' >
            {
                error 
                    ? <Error/>
                    
                    : isFetching
                            ? <MyLoader/>

                            : <>
                        <div className='full-header' >
                <h1>{pizza?.name}</h1>
                <div className='fullImg' >
                    <img src={pizza?.url} />
                </div>
            </div>
            <div className='full-pizza-content' >
                <div className='full-price' >
                    <span>Тесто:  {pizza?.types.map(type => <p>{type}</p>)}</span>
                    <span>Размеры:  {pizza?.sizes.map(size => <p>{size} см</p>)}</span>
                </div>
                <div className='full-dop' >
                    <h1>{pizza?.cost} руб</h1>
                </div>
                <Link to='/' >
                <button className='button-full' type='button' >Вернуться назад</button>
                </Link>
            </div>
                    </>
            }
            
        </div>
    );
};

export default FullPizza;