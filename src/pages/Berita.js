import React from 'react'
import axios from 'axios'

import moment from 'moment'
import 'moment/locale/id'

import Card from '../components/Card'
import Menu from '../components/Menu'

class Berita extends React.Component {
  state = {
    berita: []
  }

  componentDidMount() {
    axios.get('https://azizi.pythonanywhere.com/api/v1/news')
    .then(res => {
      const data = res.data
      this.setState({ berita: data })
    })
  }

  render() {
    return(
      <div>
        <h1 className="font-primary text-center m-5" style={{color: 'black'}}>Berita Seputar Banten</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
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