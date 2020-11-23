import React from 'react'

import Logo from '../images/logo.png'
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'

function Profil() {
    return(
        <div className="d-flex justify-content-center row mx-auto" style={{height: '100%', width: '100%'}}>
            <Navigation/>
            <div className="tur col-md-12 col-lg-6 d-flex align-items-center flex-column overflow-auto shadow" style={{backgroundColor: '#fff'}}>
                <div className="text-wrap text-justify col-md-10 col-12 mt-4 mb-4 font-paragraph color-primary-btnvrs">
                    <h1 className="font-primary color-primary-btnvrs text-center mb-4">Profil Banten</h1>
                    <div className="text-center my-4">
                        <img className="col-10 col-sm-8" src={Logo} alt="logo" />
                    </div>
                    <div>
                        <p>Banten merupakan sebuah provinsi, wilayah paling barat di Pulau Jawa, Indonesia. Provinsi ini pernah menjadi bagian dari Provinsi Jawa Barat daerah ini menjadi wilayah pemekaran sejak tahun 2000, dengan keputusan Undang-Undang Nomor 23 Tahun 2000. Pusat pemerintahannya berada di Kota Serang.</p>
                        
                        <p>Wilayah Banten terletak di antara 5º7'50"-7º1'11" Lintang Selatan dan 105º1'11"-106º7'12" Bujur Timur, berdasarkan Undang-Undang Republik Indonesia Nomor 23 Tahun 2000 luas wilayah Banten adalah 9.160,70 km². Provinsi Banten terdiri dari 4 kota, 4 kabupaten, 154 kecamatan, 262 kelurahan, dan 1.273 desa.</p>

                        <p>Wilayah laut Banten merupakan salah satu jalur laut potensial. Selat Sunda merupakan salah satu jalur lalu lintas laut yang strategis karena dapat dilalui kapal besar yang menghubungkan Australia dan Selandia Baru dengan kawasan Asia Tenggara misalnya Thailand, Malaysia, dan Singapura. Di samping itu Banten merupakan jalur penghubung antara Jawa dan Sumatra. Bila dikaitkan posisi geografis dan pemerintahan, maka wilayah Banten terutama daerah Tangerang Raya (Kota Tangerang, Kabupaten Tangerang, dan Kota Tangerang Selatan) merupakan wilayah penyangga bagi Jakarta. Secara ekonomi wilayah Banten memiliki banyak industri. Wilayah Provinsi Banten juga memiliki beberapa pelabuhan laut yang dikembangkan sebagai antisipasi untuk menampung kelebihan kapasitas dari pelabuhan laut di Jakarta dan ditujukan untuk menjadi pelabuhan alternatif selain Singapura.</p>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Profil