import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Info from "./components/Info";
import ProductSection from "./components/ProductSection";
import Community from "./components/Community";
import Brands from "./components/Brands";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="header">
        <TopBar />
        <Navbar />
      </header>

      <main>
          <Banner />
          <Info />
          <ProductSection />
          <Community />
          <Brands />
          <Subscribe />
          <Footer />
      </main>
    </>
  );
}

export default App;