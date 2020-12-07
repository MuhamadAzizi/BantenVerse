import React from 'react'
import ReactLoading from 'react-loading'
import { usePromiseTracker } from 'react-promise-tracker'

function Loader() {
    const { promiseInProgress } = usePromiseTracker()
    const loadingContainerStyle = {
        backgroundColor: 'rgb(37, 51, 64)',
        marginBottom: '48px'
    }

    return(
        promiseInProgress &&
        <div className="rounded p-4" style={loadingContainerStyle}>
            <ReactLoading
                type={'bars'}
                height={256}
                width={256}/>
        </div>
    )
}

export default Loader