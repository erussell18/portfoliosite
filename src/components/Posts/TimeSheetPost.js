import React from'react'
import Header from '../Header'
import Footer from '../Footer'

function TimeSheetPost(){
    return(
        <section id='BlogPost'>
            <Header />
                <article>
                    <h1>Creating A Simpler Way To Submit Time Sheets</h1>

                    <h3>Introduction</h3>
                        <p>I have been working as a work study for my university for a couple years and as I was doing so I learned a lot, but the one thing that annoyed me was the tedious process of filling out and submitting your timesheet. The process was to fill out the sheet on the university website then retype and send your manager your timesheet in an email. During this time I was looking for projects to work on so I decided to create a TimeSheet application. At first I created it in python as a command line application that I could use but later decided to start recreating it as a web application using JavaScript.
                        </p>
                    <h3>Starting The Project</h3>
                        <p>I started this project by making the skeleton of the application with HTML and CSS to get a feel of how I would want it to look. I knew that I would need input boxes for the date, time, and reason (Meeting or Work). Two buttons, one for submitting the inputted information and another for adding up the total hours. Lastly I needed a textbox to show the completed timesheet. After I finished that I started to work on the JavaScript part of the project where I would get the information from the input boxes, put them in the textbox then add up the time.
                        </p>
                    <h3>Running Into Problems</h3>
                        <p>I started with declaring all of the variables that I would need which included the StartTime, EndTime, and SubmitTime that was taken from the input boxes. Pulling the information from the input boxes was the easy part, after that I added an array for the Weekdays so it displayed the information in this format: Thursday, 01/20/2022, 8:00AM - 10:00AM: 2 Hours. To get the hours that were worked that day I subtracted the EndTime from the StartTime. This worked when I was using my part time work schedule since I only worked in the mornings but after later testing I realized that this method was not going to work. In this program working from 8am to 10am gives you 10-8 = 2 hours but if you worked 8am to 1pm it would give you 1-8 = -7 hours worked. After thinking about ways that I could solve this problem in the end I decided to calculate the time based on AM and PM. AM time would be regular but PM would add 12. So if you worked 8am to 1pm it would give you (1+12)-8 = 5 hours.
                        </p>
                    <h3>Finishing Up</h3>
                        <p>After solving that problem I was able to send my timesheet out in about a minute or two which is faster then the five or ten minutes it took me to do it before. There are still a few bugs and improvements that I want to add like using the gmail api so I can send the email straight from the web app to save more time and adding a way to save presets. Lots of things can be added but for now I am going to put a hold on this project to try something new.
                        </p>
                </article>
            <Footer />
        </section>
    )
}

export default TimeSheetPost;