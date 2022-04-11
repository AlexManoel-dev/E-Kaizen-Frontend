import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Páginas
import Index from './pages/Index';
import Pieces from './pages/Pieces';

export default function Rotas(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={ <Index/> } />
                <Route path='/pieces' element={ <Pieces/> } />
            </Routes>
        </Router>
    );
};