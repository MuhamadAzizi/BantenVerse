import React from 'react'
import Draggable from 'react-draggable'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    return(
        <Draggable 
            axis="y" 
            grid={[25, 25]}
            scale={1}>
            <div style={{position: 'fixed', bottom: '10px', right: '10px'}}>
                <div class="btn-group dropup">
                    <button style={{width: '52px', height: '52px'}} type="button" className="btn btn-light border border-dark rounded-circle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                    <div class="dropdown-menu border border-dark">
                        {/* <NavLink to="/" className="dropdown-item text-dark ">Home</NavLink> */}
                        <NavLink to="/profil" className="dropdown-item">Profil</NavLink>
                        <NavLink to="/berita" className="dropdown-item">Berita</NavLink>
                        <NavLink to="/cuaca" className="dropdown-item">Cuaca</NavLink>
                        <NavLink to="/jadwal-sholat" className="dropdown-item">Jadwal Sholat</NavLink>
                        <a href="https://www.loker.id/lokasi-pekerjaan/banten" className="dropdown-item" target="_blank" rel="noopener noreferrer">Loker</a>
                        <a href="https://www.bantenprov.go.id/" className="dropdown-item" target="_blank" rel="noopener noreferrer">bantenprov.go.id</a> 
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default Menu