import React from 'react'

import axios from 'axios'
import moment from 'moment'
import FadeIn from 'react-fade-in'

import MyClock from '../components/MyClock'
import Menu from '../components/Menu'

const now = moment().format('YYYY-MM-DD')

class JadwalSholat extends React.Component {
    state = {
        jadwal: []
    }

    componentDidMount() {
        axios.get(`https://api.banghasan.com/sholat/format/json/jadwal/kota/676/tanggal/${now}`)
        .then(res => {
            const data = res.data.jadwal.data
            this.setState({ jadwal: data })
        })
    }

    render() {
        return(
            <div>
                <div className="container">
                    <h1 className="font-primary text-center mt-5" style={{color: 'black'}}>Jadwal Sholat Serang dan Sekitarnya</h1>
                    <h1 className="font-primary text-center mb-5" style={{color: 'black'}}>{this.state.jadwal.tanggal}</h1>
                    <MyClock/>
                </div>
                <div className="container">
                    <FadeIn>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Imsak</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.imsak}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Subuh</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.subuh}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Terbit</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.terbit}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Dzuhur</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.dzuhur}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Ashar</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.ashar}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Maghrib</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.maghrib}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-primary-btnvrs col-12">
                                    <div className="card-body text-light p-0 py-2">
                                        <h1 className="text-center font-paragraph">Isya</h1>
                                        <h5 className="card-title text-center font-paragraph mb-0">{this.state.jadwal.isya}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <Menu/>
            </div>
        )
    }
}

export default JadwalSholat