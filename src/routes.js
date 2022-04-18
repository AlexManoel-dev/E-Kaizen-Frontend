import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Páginas
import Index from './pages/Index';
import Pieces from './pages/Pieces';
import Computers from './pages/Computers';
import Peripherals from './pages/Peripherals';
import Videogames from './pages/Videogames';
import AboutUs from './pages/AboutUs';

export default function Rotas(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Index/> } />
                <Route path='/pieces' element={ <Pieces/> } />
                <Route path='/computers' element={ <Computers/> } />
                <Route path='/peripherals' element={ <Peripherals/> } />
                <Route path='/videogames' element={ <Videogames/> } />
                <Route path='/aboutUs' element={ <AboutUs/> } />
            </Routes>
        </Router>
    );
};