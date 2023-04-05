import React from "react";
import { useLinkClickHandler, useLoaderData } from "react-router-dom";

const Books = () => {
  const { books } = useLoaderData();
  console.log(books);

  return (
    <div className="my-container">
      <h1 className="mx-5 text-red-500 text-center font-semibold lg:text-2xl">
        Total Available Books: {books.length}
      </h1>
    </div>
  );
};

export default Books;
