import './App.css'
import { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PlayLists from './components/PlayLists';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import HitParade from './components/HitParade';
import Search from './components/Search';

const App = () => {

  const [token, setToken] = useState("")
  
  useEffect(() => {

    let token = window.localStorage.getItem("token")
    setToken(token)

  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={!token ? <Hero /> : <PlayLists />} />
        <Route path="/hit-parade" element={!token ? <div>Please login!</div> : <HitParade />} />
        <Route path="/search" element={!token ? <div>Please login!</div> : <Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
