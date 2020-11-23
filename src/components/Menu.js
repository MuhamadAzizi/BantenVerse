import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    return(
        <div style={{position: 'fixed', bottom: '10px', left: '10px'}}>
            <div class="btn-group dropup">
                <button style={{opacity: '0.5'}} type="button" class="btn btn-dark rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="dropdown-menu text-center">
                    <NavLink to="/" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark">Home</NavLink>
                    <NavLink to="/profil" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark">Profil</NavLink>
                    <NavLink to="/berita" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark">Berita</NavLink>
                    <NavLink to="/jadwal-sholat" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark">Jadwal Sholat</NavLink>
                    <a href="https://www.loker.id/lokasi-pekerjaan/banten" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark" target="_blank" rel="noopener noreferrer">Loker</a>
                    <a href="https://www.bantenprov.go.id/" style={{borderLeft: 'none', borderRight: 'none', borderRadius: '0'}} className="nav btn card col-12 mb-2 font-paragraph text-dark" target="_blank" rel="noopener noreferrer">bantenprov.go.id</a> 
                </div>
            </div>
        </div>
    )
}

export default Menu