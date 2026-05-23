import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { AppProvider } from './context/AppContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

export default function App(){
  return <AppProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/:slug" element={<ProjectDetails/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    <Footer />
    <Analytics />
  </AppProvider>
}
