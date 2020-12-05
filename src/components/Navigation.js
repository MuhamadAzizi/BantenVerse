import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return(
        <div className="col-lg-3 col-md-12 d-flex justify-content-center my-4">
            <div className="col-12 col-lg-11 bg-primary-btnvrs rounded text-light py-2" style={{width: '100%'}}>
                <h1 className="font-primary my-3 text-center">Navigation</h1>
                <div>
                    {/* <NavLink to="/" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark">Home</NavLink> */}
                    {/* <NavLink to="/profil" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark">Profil</NavLink> */}
                    <NavLink to="/berita" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark">Berita</NavLink>
                    <NavLink to="/jadwal-sholat" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark">Jadwal Sholat</NavLink>
                    <a href="https://www.loker.id/lokasi-pekerjaan/banten" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark" target="_blank" rel="noopener noreferrer">Loker</a>
                    <a href="https://www.bantenprov.go.id/" className="nav btn btn-light col-12 mb-2 card font-paragraph text-dark" target="_blank" rel="noopener noreferrer">bantenprov.go.id</a> 
                </div>
            </div>
        </div>
    )
}

export default Navigation