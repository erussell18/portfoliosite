import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import GitHubLogo from './images/GitHubLogo.png'

function Contact() {
    return(
        <section id='Contact'>
            <Header />
            <section id="ContactPage">
                <h1>Contact</h1>

                <h3>Email</h3>
                <p>eddierussell18@gmail.com</p>

                <h3>GitHub</h3>
                <a href='https://github.com/erussell18' target='_blank'><img src={GitHubLogo} /> </a>
                
                
            </section>
            <Footer />
        </section>
    )
}

export default Contact;