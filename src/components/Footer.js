import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return(
        <footer className="bg-dark p-3 d-flex flex-column align-items-center justify-content-center">
            <small className="d-flex align-items-center text-light">Made with full of <FontAwesomeIcon icon={faHeart} className="mx-2 love"/> by Muhamad Azizi</small>
            <div className="text-light">
                <a href="https://www.linkedin.com/in/muhamad-azizi-84a363187/" className="text-light"><FontAwesomeIcon icon={faLinkedin} size="lg" style={{marginLeft: '8px'}} /></a>
                <a href="https://github.com/MuhamadAzizi" className="text-light"><FontAwesomeIcon icon={faGithubSquare} size="lg" style={{marginLeft: '8px'}} /></a>
            </div>
        </footer>
    )
}

export default Footer