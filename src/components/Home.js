import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header';
import WelcomePic from './images/PhonePic.jpg'
import AIPic from './images/AIPIC.jpg'
import HotApp from './images/HotAppPic.jpg'
import InfoSec from './images/InfoSecurePic.jpg'
import ReactLogo from "./images/ReactLogo.png"
import SurveyPic from './images/SurveyPic.jpg'
import TimePic from './images/TimePic.jpg'
import MobileSite from './images/MobileSite.jpg'
import Footer from './Footer'

function Home(){
    return(
        <body>
            <header>
                <Header />
            </header>

            <section id="Welcome">
                <div>
                <h1>WELCOME TO MY PORTFOLIO</h1>
                <h4>In this website you will be able to see the projects that I have worked on and view my blog where I talk about the things that I have learned while working on them.</h4>
                </div>
                <div>
                <img src={MobileSite} alt='Picture of a phone' height="500"></img>
                </div>
            </section>

            <section id="Posts">
                <h4>All Posts</h4>
                <input type="search" placeholder='Search'></input>

                <article id="PostSummary">
                    <article id="Article1">
                        <Link to="/TimeSheetPost">
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
                        <Link to="/SurveyFormPost">
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
                        <Link to="/FirstReactProjectPost">
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

                <article id="Footer">
                    <Footer />
                </article>
            </section>

        </body>
    )
}

export default Home;