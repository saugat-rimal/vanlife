import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AboutPage from "./pages/About"
import Home from "./pages/Home"
import VansPage from "./pages/Vans"
import VansDetail from "./pages/VansDetail"

import PageNotFound from './pages/PageNotFound';


function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VansDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
