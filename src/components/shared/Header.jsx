import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header container">
            <Link className="header__logo" to="/">Rick and Morty</Link>
            <nav className="header__nav">
                <Link className="header__link" to="/">Home</Link>
                <Link className="header__link" to="/about">About</Link>
                <Link className="header__link" to="/favourites">Favourites</Link>
            </nav>
        </header>

    )
}

export default Header
