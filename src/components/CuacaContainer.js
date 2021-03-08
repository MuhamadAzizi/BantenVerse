import React from 'react'

function CuacaContainer(props) {
    return(
        <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
            <thead className="bg-dark">
                <th className="fw-lighter text-light fs-2">{props.name}</th>
            </thead>
            <tbody>
                <tr>
                    <td className="fw-lighter text-dark text-capitalize py-2 fs-3">{props.weather}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CuacaContainer