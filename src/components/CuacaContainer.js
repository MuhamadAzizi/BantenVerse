import React from 'react'

function CuacaContainer(props) {
    return(
        <table className="col-12 col-lg-6 text-center border mb-4 mx-auto">
            <thead className="bg-dark">
                <th className="font-primary">{props.name}</th>
            </thead>
            <tbody>
                <tr>
                    <td className="font-primary text-dark text-capitalize py-2" style={{fontSize: '24px'}}>{props.weather}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CuacaContainer