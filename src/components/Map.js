import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibS1heml6aTEyIiwiYSI6ImNraDQ5aHhnNDAxOGszM21vcW05d3M2eTEifQ.VHgBmHvU2SDdXxSR3a8XEQ';

function Map(props) { 
    useEffect(() => {
        new mapboxgl.Map({
            container: 'map',
            center: [props.lng, props.lat],
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: props.zoom
        })
    })

    return(
        <div id="map" className={props.className} style={props.style}></div>
    )
}

export default Map