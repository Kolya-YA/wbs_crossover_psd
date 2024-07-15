
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Customers from "./components/Customers"
import News from "./components/News"
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Customers />
      <News />
      <Footer />
    </>
  );
}

export default App;
