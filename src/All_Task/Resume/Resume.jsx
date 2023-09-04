import React from "react";
import "./resume.css";
import Rabout from "./Rabout";
import Rcontact from "./Rcontact";
import Redu from "./Redu";
import RExp from "./RExp";
import Rintrest from "./Rintrest";
import Rprofile from "./Rprofile";
import Rskill from "./Rskill";
const Resume = () => {
  const data = {
    name: "Yug Doshi",
    email: "yugcuspc@gmail.com",
    phone: "+91 1234567890",
    profilepic:
      "https://cdn.discordapp.com/avatars/480285300484997122/a_7e63fb0a76d9a69a645119a164334760.gif",
    address: "some address goes here.........",
    about: `I am Yug Doshi and I am interested in learning many new programming languages and exploring new technologies`,
    experience: [
      {
        tofrom: "Apr 2023 - May 2023",
        title: "Nodejs - Web Design",
        company: "Perfetto Solution",
      },
      {
        tofrom: "August 2022 - September 2022",
        title: "Python",
        company: "Zenzzen.com",
      },
      {
        tofrom: "Aug 2017 - Dec 2017",
        title: "Intern - Web Design",
        company: "Lynden",
      },
    ],
    education: [
      {
        tofrom: "Jan. 2016 - Apr. 2018",
        title: "Bachelor of Science Web Design and Development",
        subtitle: "BYU-Idaho",
      },
      {
        tofrom: "Sept. 2014 - Dec. 2015",
        title: "Computer Science",
        subtitle: "Edmonds Community College",
      },
      {
        tofrom: "Jan. 2013 - Jun. 2015",
        title: "High School",
        subtitle: "Henry M. Jackson High School",
      },
    ],
    skills: [
      {
        name: "HTML5",
        percent: 95,
      },
      {
        name: "CSS3 & SCSS",
        percent: 90,
      },
      {
        name: "JavaScript",
        percent: 90,
      },
      {
        name: "jQuery",
        percent: 50,
      },
      {
        name: "SQL",
        percent: 70,
      },
      {
        name: "Mongo DB",
        percent: 90,
      },
    ],
    languages: ["English - Fluent", "Hindi - Fluent", "Gujarati - Native"],
  };
  return (
    <>
      <div class="resume">
        <div class="base">
          <Rprofile {...data} />
          <Rabout {...data} />
          <Rcontact {...data} />
        </div>
        <div class="func">
          <RExp {...data} />
          <Redu {...data} />
          <Rskill {...data} />
          <Rintrest {...data} />
        </div>
      </div>
    </>
  );
};

export default Resume;
