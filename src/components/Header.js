import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation';

function Header() {
    return(
        <body>
            <header>
                <br></br>
                <hr></hr>
                <h1>EDDIE RUSSELL</h1>
                <Navigation />
            </header>
        </body>
    )
}

export default Header