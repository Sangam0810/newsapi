import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './compontents/Footer'
import Navbar from './compontents/Navbar'
import News from './compontents/News'
import themeContext from './Contextapi/ThemeContext'
import { useContext, useEffect } from 'react'

function App() {

  const {theme} = useContext(themeContext)

  useEffect(()=>{
    let htmlTag = document.querySelector('html');
    htmlTag.classList.remove('light', 'dark');
    htmlTag.classList.add(theme);
  }, [theme])

  return (
    <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path="/" element={<News category="Top"/>}/>
          <Route path="/education" element={<News category="Education"/>}/>
          <Route path="/science" element={<News category="Science"/>}/>
          <Route path="/technology" element={<News category="Technology"/>}/>
          <Route path="/business" element={<News category="Business"/>}/>
          <Route path="/health" element={<News category="Health"/>}/>
          <Route path="/sports" element={<News category="Sports"/>}/>
          <Route path="/politics" element={<News category="Politics"/>}/>
          <Route path="/entertainment" element={<News category="Entertainment"/>}/>
          <Route path="/other" element={<News category="Other"/>}/>
         </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
