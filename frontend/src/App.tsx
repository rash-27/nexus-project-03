import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Footer from "./components/Footer"


function App() {

  return (
    <>
  <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact  />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
