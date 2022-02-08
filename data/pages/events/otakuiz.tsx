//data
import Main from "../../Main";
import { EventCoordinators } from "../../EventCoordinators";
//assets
import OTK from '../../../public/images/events/otk_logo.png'

const Otakuiz = {
    title: "Otakuiz",

    tagline: "You don’t stand a single chance to win unless you fight!",
    
    link: '/events/otakuiz',
    
    details: {
        shortDescription: "For all the seasoned Otaku out there, this is an event that will test your knowledge in anime every step of the way. Prepare to battle it out in Otakuiz!",
        date: `${Main.dates.day1} - ${Main.dates.day2}`,
        time: '1:00 PM to 3:00 PM',
        venue: 'AV Lab',
        grades: '9 - 12',
        image: OTK,
        accent: "hsl(257, 100%, 6%)",
    },
    
    headings: {
        finalists: [
            {
                teamName: "L and Light",
                members: [
                    {
                        name: "Gagan Arya",
                        grade: "11B2"
                    },
                    {
                        name: "Jyothir Krishna",
                        grade: "11B2"
                    }
                ]
            },
            {
                teamName: "JoBros",
                members: [
                    {
                        name: "Tejas Rajeev",
                        grade: "11A2"
                    },
                    {
                        name: "Matthew Presannan M",
                        grade: "11A2"
                    }
                ]
            },
            {
                teamName: "Headless Angels",
                members: [
                    {
                        name: "Prasannaa R.K.V.",
                        grade: "12B1"
                    },
                    {
                        name: "Nitin Karthick R.P.",
                        grade: "12A1"
                    }
                ]
            }
        ],

        about: "Aesthetically pleasing scenes, powerful dialogues and stellar battles, anime has always been a world charged with energy and emotion. For all the seasoned anime watchers out there, this is the perfect opportunity for you. Prepare to battle it out in Otakuiz! An event that will test your knowledge in anime every step of the way. Do you have what it takes?",
            
        rules: [
            "Open for Grades 9 to 12",
            "The competitors will participate in groups of 2.",
            "No use of the internet or any gadgets will be allowed.",
            "Participants will be allowed to confer within their own teams to answer questions as there will be no individual participation rounds.",
            "They may not, however, confer with any other groups in the middle of any rounds.",
            "Attempt to answer before completion of the question or out of turn leads to deduction of points."
        ],
        
        eventCoordinators: EventCoordinators.filter(coordinator => coordinator.event === "Otakuiz"),

        registration: [
            "This is a Duo (2 member) event."
        ]
    }
}

export default Otakuiz;