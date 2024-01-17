/* eslint-disable react/prop-types */
import Book from "../Book/Book";

const Books = ({booksData,handleFavourite}) => {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        booksData.map((book) => (
          <Book key={book.id} book={book} handleFavourite={handleFavourite}/>
        ))
      }
    </section>
  );
};

export default Books;
