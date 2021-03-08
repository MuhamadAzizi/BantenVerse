import React from 'react'

import Map from './Map'

function Sidebar() {
    return(
        <div className="col-lg-3 col-md-12 d-flex justify-content-center my-3">
            <div className="col-12 col-lg-12 bg-dark rounded text-light p-2">
                <h1 className="text-center font-primary my-3">Peta</h1>
                <Map
                    className={'mx-auto mb-3 rounded'}
                    lng={106.150276}
                    lat={-6.120000}
                    zoom={10}
                    style={{height: '275px'}}
                />
            </div>
        </div>
    )
}

export default Sidebar