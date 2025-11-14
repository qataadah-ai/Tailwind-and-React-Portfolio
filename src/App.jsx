
import './App.css'
import {React,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/about.jsx'
import Hero from './components/Hero.jsx'
import Skils from './components/Skils.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

function App() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return (
   <main className='bg-gray-950'>
     <Hero/>
     <About/>
     <Skils/>
     <Project/>
     <Contact/>
    
   </main>
  )
}

export default App
// ...existing code...