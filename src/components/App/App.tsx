import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MovieFavotitesPage from '../../pages/MovieFavotitesPage'
import MoviesPage from '../../pages/MoviesPage'
import MovieViewPage from '../../pages/MovieView'
import Footer from '../Footer'
import Header from '../Header'

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MoviesPage />} />
                    <Route path="/view/:id" element={<MovieViewPage />} />
                    <Route path="/favorites" element={<MovieFavotitesPage />} />
                </Routes>
                <Footer />
            </Router>
        </>
        
    )
}

export default App
