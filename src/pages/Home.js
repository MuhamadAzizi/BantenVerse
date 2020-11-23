import React from 'react'
import { NavLink } from 'react-router-dom'

import Map from '../components/Map'

function Home() {
    return(
        <div>
            <div className="bg d-flex align-items-center flex-row">
                <div className="text-hp-wrapper text-center p-5">
                    <div className="col-12 col-md-8 mx-auto">
                        <h1 className="font-primary">BantenVerse</h1>
                        <p className="font-paragraph mt-3">Mau informasi tentang seputar Provinsi Banten? Yuk silakan pencet tab dibawah untuk menuju apa yang kalian butuhkan</p>
                    </div>
                        <div className="tab font-medium-bold pt-4 text-nowrap">          
                            <NavLink className="m-2 btn btn-outline-light rounded-pill" to="/profil">PROFIL</NavLink>
                            <NavLink className="m-2 btn btn-outline-light rounded-pill" to="/berita">BERITA</NavLink>
                            <NavLink className="m-2 btn btn-outline-light rounded-pill" to="/cuaca">CUACA</NavLink>
                            <NavLink className="m-2 btn btn-outline-light rounded-pill" to="/jadwal-sholat">JADWAL SHOLAT</NavLink>
                            
                            <a className="m-2 btn btn-outline-light rounded-pill" href="https://www.loker.id/lokasi-pekerjaan/banten" target="_blank" rel="noopener noreferrer">LOKER</a>
                            <a className="m-2 btn btn-outline-light rounded-pill" href="https://www.bantenprov.go.id" target="_blank" rel="noopener noreferrer">BANTENPROV.GO.ID</a>
                        </div>
                </div>
            </div>

            <div className="text-center m-4">
                <h1 className="font-primary" style={{color: 'black'}}>Peta Ibu Kota Banten dan Sekitarnya</h1>
                <Map
                    className={'mx-auto mt-4 mb-4 rounded col-12 col-lg-6'}
                    lng={106.150276}
                    lat={-6.120000}
                    zoom={10}
                    style={{height: '420px'}}
                />
            </div>
        </div>
    )
}

export default Home