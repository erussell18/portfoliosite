import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

function Portfolio() {
    return(
        <section id='Portfolio'>
            <Header />
            <section id="Projects">
                <h1>Projects</h1>

                <h2><a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Tribute_Page/Main.html"
                target="_blank">Tribute Page</a></h2>

                <h2><a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Survey_Page/Survey.html"
                target="_blank">Survey Form</a></h2>

                <h2><a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Product_LandingPage/Home.html"
                target="_blank">Landing Page</a></h2>

                <h2><a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/TimeSheet/Main.html"
                target="_blank">Time Sheet App</a></h2>

                <h2><a href="http://eddie-russell-portfolio.s3-website.us-east-2.amazonaws.com/"
                target="_blank">Old Portfolio Website</a></h2>
                
            </section>
            <Footer />
        </section>
    )
}

export default Portfolio;