import React, {FC} from 'react';

const NoPizzas: FC = () => {
    return (
        <div className='NoPizzas' >
            <div className='NoHeader' >
                <h2>Пиццы не найдены </h2>
                <img width={50} height={50} src='/img/smailik.svg' />
            </div>
        </div>
    );
};

export default NoPizzas;