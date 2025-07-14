import React from 'react';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  const {bookId, bookName, author, image, rating ,tags ,yearOfPublishing} = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="max-w-sm mx-auto transition-transform transform hover:scale-105 duration-300">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-[430px] flex flex-col">
        <figure className="bg-gray-100 p-6 flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="h-44 object-contain rounded-md"
          />
        </figure>

        <div className="px-6 py-4 flex flex-col justify-between flex-grow">
          <div>
            <div className='flex , justify-around gap-5 font-semibold pb-2'>
 {
              tags.map(tag=><button className=''>{tag}</button>)
            }
            </div>
           
            <h2 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2">
              {bookName}
              <span className="text-xs bg-violet-200 text-violet-700 px-2 py-1 rounded-full font-medium">
               {yearOfPublishing}
              </span>
            </h2>
            <p className="text-sm text-gray-500">
              Discover a great read with immersive design and intuitive layout.
            </p>
          </div>

          <div className="flex justify-between text-sm font-medium text-gray-600 mt-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"><p>Book by : {author}</p> 
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              ⭐ {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
