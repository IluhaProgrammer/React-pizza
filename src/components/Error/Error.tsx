import React, {FC} from 'react';

const Error: FC = () => {
    return (
        <div className='Error-block' >
            <div className='Error-header' >
                <h2>Произошла ошибка </h2>
                <img width={50} height={50} src='/img/smailik.svg' />
            </div>
            <div className='Error-content' >
                <p>К сожалению, не удалось получить пиццы, попробуйте повторить попытку позже </p>
            </div>
        </div>
    );
};

export default Error;