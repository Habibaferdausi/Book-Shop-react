import React from "react";
import { useLinkClickHandler, useLoaderData } from "react-router-dom";

const Books = () => {
  const booksData = useLoaderData();
  console.log(booksData);

  return (
    <div>
      <h1>This is book page</h1>
    </div>
  );
};

export default Books;
