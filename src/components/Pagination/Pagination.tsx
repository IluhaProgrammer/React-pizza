import React, { FC } from 'react';
import ReactPaginate from 'react-paginate'

interface PaginationProps {
    currentPage: number
    onChangePage: (number: number) => void
}

const Pagination: FC<PaginationProps> = ({currentPage, onChangePage}) => {
    return (
        <ReactPaginate
        className='Paginate'
        pageClassName='PaginationPage'
        activeLinkClassName='active'
        previousClassName='previous'
        nextClassName='next'
        breakLabel="..."
        nextLabel=" > "
        previousLabel=" < "
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    );
};

export default Pagination;