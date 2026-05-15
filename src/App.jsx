import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ScrollProgress from './Components/ScrollProgress'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import ServiceDetails from './Components/ServiceDetails'
import Team from './Components/Team'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ScrollProgress />
    </BrowserRouter>
  )
}

export default App
