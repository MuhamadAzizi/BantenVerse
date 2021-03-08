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
                <div className="container my-4">
                    <div className="mb-4">
                        <h1 className="text-center">Jadwal Sholat Serang dan Sekitarnya</h1>
                        <h2 className="text-center">{this.state.jadwal.tanggal}</h2>
                    </div>
                    <MyClock/>
                </div>
                <div className="container">
                    <FadeIn>
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Imsak</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.imsak}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Subuh</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.subuh}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Terbit</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.terbit}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Dzuhur</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.dzuhur}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Ashar</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.ashar}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Maghrib</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.maghrib}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mb-4">
                                <div className="card bg-dark col-12">
                                    <div className="card-body text-light text-center p-0 py-2">
                                        <span>Isya</span><br/>
                                        <span className="card-title mb-0">{this.state.jadwal.isya}</span>
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