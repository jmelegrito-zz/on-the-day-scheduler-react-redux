import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h3><strong>On-The-Day Scheduler</strong></h3>
                <p>Welcome to the On-The-Day Scheduler! <br/> 
                It's a Single Page Application (SPA) designed to help Rehab Directors keep track of the Rehab Team's daily schedule. This allows them to make sense of which patient is assigned to which therapist and when. </p>
                <p>Getting started is easy: simply input names on the left pane and assign patients to their respective therapists.<br/>
                After that, click on the navigation bar links to view the schedule according to therapist or patient. You can also view the raw schedule data.</p>
                <p>Next Steps: 
                    <ul>
                        <li>Add Print-to-PDF function</li>
                        <li>Add Sign-in page and databases to store data</li>
                        <li>Add function to check Schedule history</li>
                    </ul>
                </p>
                <p>This page has been developed using React, Redux, and Bootstrap</p>
                <p>To provide feedback, suggestions, or questions, please contact John Melegrito at <a href="mailto:john.e.melegrito@gmail.com">john.e.melegrito@gmail.com</a>.</p>
            </div>
        )
    }
}

export default Home