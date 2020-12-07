import React from 'react'
import ReactLoading from 'react-loading'
import { usePromiseTracker } from 'react-promise-tracker'

function Loader(props) {
    const { promiseInProgress } = usePromiseTracker()

    return(
        promiseInProgress &&
        <div className="rounded p-4" style={props.styles}>
            <ReactLoading
                type={'bars'}
                height={props.height}
                width={props.width}/>
        </div>
    )
}

export default Loader