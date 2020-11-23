import React from 'react'
import axios from 'axios'
import FadeIn from 'react-fade-in'

import Menu from '../components/Menu'

const apiWeather = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '29b8ad1e158e334342c8aec71172fcc3'

class Cuaca extends React.Component {
    banten = 1923045
    serang = 1627546
    tangerang = 1625084
    pandeglang = 1632823

    state = {
        mainBanten: [],
        weatherBanten: [],
        mainSerang: [],
        weatherSerang: [],
        mainTangerang: [],
        weatherTangerang: [],
        mainPandeglang: [],
        weatherPandeglang: [],
    }

    componentDidMount() {
        axios.get(`${apiWeather}weather?id=${this.banten}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            this.setState({ mainBanten: data, weatherBanten: data.weather[0] })
        })

        axios.get(`${apiWeather}weather?id=${this.serang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            this.setState({ mainSerang: data, weatherSerang: data.weather[0] })
        })

        axios.get(`${apiWeather}weather?id=${this.tangerang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            this.setState({ mainTangerang: data, weatherTangerang: data.weather[0] })
        })
        
        axios.get(`${apiWeather}weather?id=${this.pandeglang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            this.setState({ mainPandeglang: data, weatherPandeglang: data.weather[0] })
        })
    }

    render() {
        return(
            <div>
                <h1 className="text-center font-primary text-dark m-5">Keadaan Cuaca</h1>
                <FadeIn>
                <div className="container mx-auto">
                    <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
                        <thead className="bg-primary-btnvrs">
                            <th className="font-primary">{this.state.mainBanten.name}</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-primary text-dark py-2" style={{fontSize: '24px'}}>{this.state.weatherBanten.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
                        <thead className="bg-primary-btnvrs">
                            <th className="font-primary">{this.state.mainPandeglang.name}</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-primary text-dark py-2" style={{fontSize: '24px'}}>{this.state.weatherPandeglang.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
                        <thead className="bg-primary-btnvrs">
                            <th className="font-primary">{this.state.mainSerang.name}</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-primary text-dark py-2" style={{fontSize: '24px'}}>{this.state.weatherSerang.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
                        <thead className="bg-primary-btnvrs">
                            <th className="font-primary">{this.state.mainTangerang.name}</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="font-primary text-dark py-2" style={{fontSize: '24px'}}>{this.state.weatherTangerang.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </FadeIn>
                <Menu/>
            </div>
        )
    }
}

export default Cuaca