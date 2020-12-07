import React from 'react'
import axios from 'axios'
import FadeIn from 'react-fade-in'
 
import Menu from '../components/Menu'
import CuacaContainer from '../components/CuacaContainer'

const apiWeather = 'https://api.openweathermap.org/data/2.5/'
const apiKey = '29b8ad1e158e334342c8aec71172fcc3'

class Cuaca extends React.Component {
    banten = 1923045
    serang = 1627546
    tangerang = 1625084
    pandeglang = 1632823

    state = {
        name: [],
        weather: [],
    }

    componentDidMount() {
        axios.get(`${apiWeather}weather?id=${this.banten}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            const arrName = this.state.name.concat(data.name)
            const arrWeather = this.state.weather.concat(data.weather[0])
            this.setState({ name: arrName, weather: arrWeather})
        })

        axios.get(`${apiWeather}weather?id=${this.serang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            const arrName = this.state.name.concat(data.name)
            const arrWeather = this.state.weather.concat(data.weather[0])
            this.setState({ name: arrName, weather: arrWeather})
        })

        axios.get(`${apiWeather}weather?id=${this.tangerang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            const arrName = this.state.name.concat(data.name)
            const arrWeather = this.state.weather.concat(data.weather[0])
            this.setState({ name: arrName, weather: arrWeather})
        })
        
        axios.get(`${apiWeather}weather?id=${this.pandeglang}&lang=id&appid=${apiKey}`)
        .then(res => {
            const data = res.data
            const arrName = this.state.name.concat(data.name)
            const arrWeather = this.state.weather.concat(data.weather[0])
            this.setState({ name: arrName, weather: arrWeather})
        })
    }

    render() {
        const data = []

        for(let i = 0; i < this.state.name.length; i++) {
            data.push(<CuacaContainer 
                name={this.state.name[i]} 
                weather={this.state.weather[i].description}/>)
        }

        return(
            <div>
                <h1 className="text-center font-primary text-dark m-5">Keadaan Cuaca</h1>
                    <div className="container mx-auto">
                        {data.map(value => (
                            <FadeIn>
                                {value}
                            </FadeIn>
                        ))}
                    </div>
                <Menu/>
            </div>
        )
    }
}

export default Cuaca