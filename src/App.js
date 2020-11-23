import React from 'react'
import { Route, HashRouter} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Berita from './pages/Berita'
import JadwalSholat from './pages/JadwalSholat'
import Profil from './pages/Profil'
import Cuaca from './pages/Cuaca'

function App() {
  return(
    <div>
      <Header/>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/berita" component={Berita} />
          <Route exact path="/jadwal-sholat" component={JadwalSholat} />
          <Route exact path="/cuaca" component={Cuaca} />
        </HashRouter>
      <Footer/>
    </div>
  )
}

export default App