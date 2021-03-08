import React from 'react'

import TextTruncate from 'react-text-truncate'
import FadeIn from 'react-fade-in'

function Card(props) {
    return(
        <div class="col-12 col-md-4" key={props.key}>
            <FadeIn>
            <a href={props.url} className="text-decoration-none">
                <div class="m-1 mb-4 card shadow">
                    <div class="card-body">
                        <TextTruncate
                            className="card-title font-primary"
                            line={2}
                            element="h5"
                            truncate="..."
                            text={props.title}
                            style={{color: 'black', fontSize: '18px'}}
                        />
                        <div className="font-paragraph mt-4" style={{fontWeight: 500, color: 'rgb(116, 116, 116)'}}>
                            <span className="me-4">{props.source}</span>
                            <span>{props.published}</span>
                        </div>
                    </div>
                </div>
            </a>
            </FadeIn>
        </div>
    )
}

export default Card