import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div>
      <h1>This is book info</h1>
    </div>
  );
};

export default BookDetails;
