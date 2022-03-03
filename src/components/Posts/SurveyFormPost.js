import React from'react'
import Header from '../Header'
import Footer from '../Footer'

function SurveyFormPost(){
    return(
        <section id='BlogPost'>
            <Header />
                <article>
                    <h1>Making A Survey Form</h1>

                    <h3>Introduction</h3>
                        <p>One of the classes I was thinking of taking involved surveys and the analysis of them. Even though I did not take the class I decided to try my hand at creating a survey for on the Web. I thought that this would help me gain a better understanding of the different types of input boxes you can use.
                        </p>
                    <h3>Starting The Project</h3>
                        <p>First I looked at some surveys online to get a decent sense of what kind of questions I would need to include and what type of input I could use for it. I decided to ask some basic questions like name, email, age, and what type of sport you like. In this way I could either ask for one or multiple answers.
                        </p>
                    <h3>CSS Trouble</h3>
                        <p>After figuring out what questions I wanted to ask, the HTML and CSS was pretty easy to do and this did not require too much Javascript. I created the Name,  Email, and Age text boxes and made them a requirement. So if all of those are not completed then the survey will not submit. I then created a drop box, radio button, and checkbox with different questions. Then I added an additional textbox for people to input their questions or concerns and a submit button to complete the form. The challenges that I faced in this project was in CSS, trying to determine how I wanted the form to look and aligning the items right took me a bit of time.</p>
                    <h3>Finishing Up</h3>
                        <p>After making sure everything worked and the form did not submit without the required text boxes being completed I marked this project as complete as of now. A couple of weeks later I learned more about CRUD applications and how to get and put values into a database using AXIOS. When I get the chance I want to create a database and have the values for each question be put into the database onSubmit.
                        </p>
                </article>
            <Footer />
        </section>
    )
}

export default SurveyFormPost;