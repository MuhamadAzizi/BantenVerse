import React from 'react'
import axios from 'axios'

import { trackPromise } from 'react-promise-tracker'
import moment from 'moment'
import 'moment/locale/id'

import Card from '../components/Card'
import Menu from '../components/Menu'
import Loader from '../components/Loader'

class Berita extends React.Component {
  state = {
    berita: []
  }
  
  loadingContainerStyle = {
    backgroundColor: 'rgb(37, 51, 64)',
    marginBottom: '48px'
  }

  componentDidMount() {
    trackPromise(
      axios.get('https://bantenverse-api.herokuapp.com/api/v1/news')
      .then(res => {
        const data = res.data
        this.setState({ berita: data })
      })
    )
  }

  render() {
    return(
      <div>
        <h1 className="text-center my-4">Berita Seputar Banten</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Loader
              styles={this.loadingContainerStyle}
              height={256}
              width={256}
            />
            { this.state.berita.map((value, i) => (
              <Card
                key={i}
                url={value.url}
                title={value.title}
                source={value.source}
                published={moment(value.time_published).fromNow()}
              />
            )) }
          </div>
        </div>
        <Menu/>
      </div>
    )
  }
}

export default Berita