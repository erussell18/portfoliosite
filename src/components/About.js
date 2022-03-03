import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

function About() {
    return(
        <section id='About'>
            <Header />
            <section id="AboutPage">
                <h1>About</h1>

                <p>I am a senior at Saint Peter’s university majoring in Computer Science Information Systems. I love problem solving and creating things which lead me to web development. Over the past four years I have been working in I.T while going to school but I am looking to transition into a web developer after I graduate. This site was created because my old portfolio website did not look as professional as I would have liked it to, so I used a fresh design that makes the site feel open and not so cluttered. In the future I might create another portfolio website when I gain more experience but for now this is the site that I will be updating with my projects.
                </p>
                
                
            </section>
            <Footer />
        </section>
    )
}

export default About;