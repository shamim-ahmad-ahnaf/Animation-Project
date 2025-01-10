import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Maruees from "./components/Maruees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <h1 className="w-full h-screen text-white bg-zinc-900">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Maruees />
        <Cards />
        <Footer />
      </h1>
    </>
  )
}

export default App
