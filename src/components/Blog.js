import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import ReactLogo from "./images/ReactLogo.png"
import SurveyPic from './images/SurveyPic.jpg'
import TimePic from './images/TimePic.jpg'
import MobileSite from './images/MobileSite.jpg'

function Blog() {
    return(
        <section id='BlogPage'>
            <Header />
            <section id="Blog">
                <section id="Posts">
                <article id="PostSummary">
                    <article id="Article1">
                        <Link to={"/TimeSheetPost"}>
                        <img src={TimePic} alt="Holding Drone" height="100"></img>
                        <p id="Author">Eddie Russell</p>
                        <p id="SummaryTitle">Creating A Simpler Way To Submit Time Sheets</p>
                        <p id="Summary">I have been working as a work study for my university for a couple years. I was learning a lot but the one thing that annoyed me was the tedious process of filling out and submitting your timesheet.</p>
                        <hr></hr>
                        <div id="postcreated">
                            <p id="Created">Created:11/13/2022</p>
                        </div>
                        </Link>
                    </article>

                    <article id="Article2">
                        <Link to="/">
                        <img src={SurveyPic} alt="Touching Phone" height="100"></img>
                        <p id="Author">Eddie Russell</p>
                        <p id="SummaryTitle">Making A Survey Form</p>
                        <p id="Summary">One of the classes I was thinking of taking involved surveys and the analysis of them. Even though I did not take the class I decided to try my hand at creating a survey for on the Web.</p>
                        <hr></hr>
                        <div id="postcreated">
                            <p id="Created">Created:11/13/2022</p>
                        </div>
                        </Link>
                    </article>

                    <article id="Article3">
                        <Link to="/">
                        <img src={ReactLogo} alt="React Logo" height="100"></img>
                        <p id="Author">Eddie Russell</p>
                        <p id="SummaryTitle">First React Project</p>
                        <p id="Summary">After learning the basic HTML,CSS, and Javascript I decided to move onto learning a frontend framework. React was the frame work I chose and I decided to create a basic portfolio site using it.</p>
                        <hr></hr>
                        <div id="postcreated">
                            <p id="Created">Created:11/13/2022</p>
                        </div>
                        </Link>
                    </article>

                </article>

                </section>
            </section>
            <Footer />
        </section>
    )
}

export default Blog;