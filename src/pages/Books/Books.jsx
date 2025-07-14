import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    return (
        <div className='py-6'>
            <h1 className='text-xl font-bold text-center pb-6'>Books Collection</h1>
            <Suspense fallback={<span>LOADING...........</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>

            </Suspense>
        </div>
    );
};

export default Books;