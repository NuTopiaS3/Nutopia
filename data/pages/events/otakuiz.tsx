//data
import Main from "../../Main";
import { EventCoordinators } from "../../EventCoordinators";
//assets
import OTK from '../../../public/images/events/otk_logo.png'

const Otakuiz = {
    title: "Otakuiz",

    tagline: "Give up on your dreams and make it a reality",
    
    link: '/events/otakuiz',
    
    details: {
        shortDescription: "Welcome to Otakuiz, the ultimate competition to crown the true, most worthy team of the title “Super Sannin”. It’s finally your time to prove that all those hours spent watching anime are not in vain by showing off the knowledge you’ve gained in the ultimate anime quiz. Are you ready to give Otakuiz a shot? Meet fellow weebs and have the time of your life? So join us for the ride and let’s have a blast together.",
        date: [`${Main.dates.day1}, 10:30 a.m. - 3:00 p.m.`,
            `${Main.dates.day2}, 9:30 a.m. - 2:30 p.m.`],
        dateAndTime: `${Main.dates.day1}, 10:30 a.m. - 3:00 p.m. | ${Main.dates.day2}, 9:30 a.m. - 2:30 p.m`,
        time: "10:30 a.m. - 3:00 p.m.",
        venue: 'Auditorium',
        grades: '9 - 12',
        image: OTK,
        accent: "hsl(257, 100%, 6%)",
    },
    
    headings: {
        finalists: [
           
        ],

        about: "Welcome to Otakuiz, the ultimate competition to crown the true, most worthy team of the title “Super Sannin”. It’s finally your time to prove that all those hours spent watching anime are not in vain by showing off the knowledge you’ve gained in the ultimate anime quiz. Are you ready to give Otakuiz a shot? Meet fellow weebs and have the time of your life? So join us for the ride and let’s have a blast together.",
            
        rules: [
            "The competitors will participate in groups of 2 or 3 and will each come up with a name for their respective team.",
            "Use of the internet and electronic gadgets are strictly prohibited.",
            "Participants will be allowed to confer within their own teams to answer questions as there will be no individual participation rounds. However, they may not confer with any other groups in the middle of any rounds.",
            "Participants are not allowed to bring any stationary except pens.",
            "The Otakuiz will consist of three rounds, the first being the preliminaries.",
            "The preliminaries will not include any negative marking and contestants who cleared the preliminaries will move to the advancing rounds.",
            "The second round is a guessr round."
        ],
        
        eventCoordinators: EventCoordinators.filter(coordinator => coordinator.event === "Otakuiz"),

        registration: [
            "Participants register Trio Teams (3 members) - 5 teams per school",
            "Anime themed team names are encouraged. The team with the BEST name will receive a special prize.",
        ]
    }
}

export default Otakuiz;
