import React from'react'
import Header from '../Header'
import Footer from '../Footer'

function FirstReactProjectPost(){
    return(
        <section id='BlogPost'>
            <Header />
                <article>
                    <h1>First React Project</h1>

                    <h3>Introduction</h3>
                        <p>After learning the basic HTML,CSS, and Javascript I decided to move onto learning a frontend framework. React was the framework I chose and I decided to create a basic portfolio site using it. I aspire to become a web developer and the best way to show off your work is with a portfolio site.
                        </p>
                    <h3>Starting The Project</h3>
                        <p>I did not know how to start with designing a portfolio website so I used an old tutorial project I did as a reference to create it. I wrote down my favorite colors, some information about me, and the projects that I completed in a google doc and then started with creating the site. Before this I did a tutorial project in react so I had the basic knowledge of it and wanted to use components to reduce the amount of repetition.
                        </p>
                    <h3>Using Components</h3>
                        <p>The first component I created was the navigation component and that included the Home, Portfolio, and About routes as well as the header. I knew that this component would have to go on each of the individual pages and a top to bottom approach would be best. After finishing that component I started on the home page. I included a little welcome message and then some information about my experience in Web Development, Web Design, and Graphic Design. Then I went on to put my completed projects into an AWS S3 bucket and deployed it. After that I linked them in the portfolio section. The About section just contains my email, phone number, and github.
                        </p>
                    <h3>Deployment</h3>
                        <p>When the web page was finished I created a build version of the app the deployed it in AWS. Looking back at the portfolio now makes me realize that I learned a lot more in the past year and that is what pushed me to create a new portfolio where I am looking to add in different features that I have learned about.
                        </p>
                </article>
            <Footer />
        </section>
    )
}

export default FirstReactProjectPost;