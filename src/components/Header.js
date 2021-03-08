import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
    return(
        <div className="bg-dark p-2">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <NavLink to="/" className="d-flex align-items-center navbar-brand">
                        <img className="logo" src={logo} alt="logo"/>
                        <span className="font-primary-brand ms-2">BantenVerse</span>
                    </NavLink>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <span className="font-primary-bold">3M</span>
                    <div className="d-flex flex-column font-secondary-light ps-1">
                        <span>Menggunakan masker</span>
                        <span>Mencuci tangan</span>
                        <span>Menjaga jarak</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header