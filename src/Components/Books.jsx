import React from "react";
import { useLinkClickHandler, useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);

  return (
    <div className="my-container">
      <h1 className="pb-4 text-red-500 text-center font-semibold lg:text-2xl">
        Total Available Books: {books.length}
      </h1>

      <div className="grid gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
