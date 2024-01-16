import Books from "../../components/Books/Books";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="my-10 lg:my-14">
        <Search />
        <Books />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
