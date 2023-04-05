import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`../book/${book.isbn13}`}>
    <div className="mt-5 overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
      <img
        src={book.image}
        alt="book cover"
        className="object-cover w-full h-56 md:h-64 xl:h-80"
      />

      <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
        <p className="font-semibold text-red-400">Name : {book.title}</p>

        <p className="mt-7">
          <span className="font-semibold text-red-200"> Des: </span>{" "}
          {book.subtitle.substring(0, 45)}...
        </p>
        <br />
        <p className="mt-auto ">Price: {book.price}</p>
      </div>
    </div>
    </Link>
  );
};

export default Book;
