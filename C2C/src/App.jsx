import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Movies from './Pages/Movies';
import Favourites from './Pages/Favourites';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;