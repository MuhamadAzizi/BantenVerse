import React from 'react'
import logo from '../images/logo.png'

function Header() {
    return(
        <div className="bg-primary-btnvrs p-2">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <a href="/" className="d-flex align-items-center">
                        <img className="logo" src={logo} alt="logo"/>
                        <span className="font-primary-brand ml-2">BantenVerse</span>
                    </a>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <span className="font-primary-bold">3M</span>
                    <div className="d-flex flex-column font-secondary-light pl-1">
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