/* eslint-disable no-case-declarations */
import { useState } from "react";
import Books from "../../components/Books/Books";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import { bookData } from "../../utils/bookData";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [booksData, setBooksData] = useState(bookData);

  const handleSearch = (event) => {
    event.preventDefault();
    const text = event.target.value;
    let filteredBooks = [];
    switch (text) {
      case "name_asc":
        filteredBooks = [...bookData].sort((a, b) =>
          b.title > a.title ? -1 : 1
        );
        setBooksData(filteredBooks);
        return;
      case "name_desc":
        filteredBooks = [...bookData].sort((a, b) =>
          a.title > b.title ? -1 : 1
        );
        setBooksData(filteredBooks);
        return;
      case "year_asc":
        filteredBooks = [...bookData].sort((a, b) => a.pubYear - b.pubYear);
        setBooksData(filteredBooks);
        return;
      case "year_desc":
        filteredBooks = [...bookData].sort((a, b) => b.pubYear - a.pubYear);
        setBooksData(filteredBooks);
        return;
    }
    filteredBooks = [...bookData].filter((book) =>
      book.title.toLowerCase().match(searchText.toLowerCase())
    );
    setBooksData(filteredBooks);
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="my-10 lg:my-14">
        <Search
          handleSearch={handleSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Books booksData={booksData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
