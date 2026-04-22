import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ScrollProgress from './Components/ScrollProgress'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <ScrollProgress />
    </BrowserRouter>
  )
}

export default App
