export const persona = {
  name: "Trevor Tran",
  title: "Upcoming Software Engineer",
  headline: "Motivated to learn and grow, ready to make an impact as a Software Engineer",
  intro:[
    `Driven by a lifelong passion for technology, I'm a upcoming Software Engineer honing my skills through the Per Scholas program and CS degree from University of Washington.
    Internship experience at Xemelgo and research projects have fueled my hands-on approach.
    Earning AWS certification reflects my continuous learning and commitment to building effective software.`,
    `Outside of my professional commitments, I find joy in seamlessly integrating my days with the wonders of nature during the summer season through fascinating hikes or serene kayaking adventures.
    Balancing my summer adventures with enthusiasm to DIY home improvement, I embrace perpetual growth and often research and learn new skills to complete various tasks around the house.`
  ]
}

export const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Xemelgo",
    date: {
      start: "October 2019",
      end: "March 2020"
    },
    descriptions: [
      "Administered the end-to-end functions of a new job tracking feature to aid customers in tracing actual labor hours.",
      "Successfully designed and deployed DynamoDB tables and RESTful APIs on AWS through utilization of Serverless framework.",
      "Leveraged React Native to support mobile development and simulated on Android and iOS platforms."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "AWS", "Severless Framework"]
  },
  {
    title: "Undergrad Research Assistant",
    company: "University of Washington",
    date: {
      start: "January 2020",
      end: "December 2019"
    },
    descriptions: [
      "Improved the quality of a national curb dataset by assessing a sample of data points, identifying locations with incorrect curb data, and creating a data validation tool to improve the data accuracy in the future.",
      "Established backend utilizing NodeJS, ExpressJS, Turf to process GeoJSON files from public city data."
    ],
    skills: ["JavaScript", "React", "NodeJS"]
  },
  {
    title: "Undergrad Research Assistant",
    company: "South Seattle College",
    date: {
      start: "January 2017",
      end: "March 2017"
    },
    descriptions: [
      "Deployed a Raspberry Pi sensor to outline wifi traffic and to insert data in MongoDB database for analysis.",
      "Utilized software package or analysis toolset to turn raw data into more useful information and insights."
    ],
    skills: ["Python", "MongoDB", "Jupiter"]
  }
]

export const projects = [
  {
    title: "Portfolio Website",
    date: {
      start: "December 2023",
      end: "Present"
    },
    descriptions: [
      "Develop personal responsive website to showcase my portfolio of software development projects.",
      "Optimize website performance and usability with SEO best practices in mind.",
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "MUI"]
  },
  {
    title: "Collaborative Canvas",
    date: {
      start: "December 2023",
      end: "January 2024"
    },
    descriptions: [
      "Utilized technical skills in software development to innovate an interactive tool for seamless collaboration and demonstration within the team.",
      "Empower teams to improved productivity and visualized creation in remote environment.",
      "Designed and developed a robust and scalable web application by implementing industry best practices."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "NodeJS", "Socket.IO"]
  },
  {
    title: "Stock Performance",
    date: {
      start: "January 2018",
      end: "March 2018"
    },
    descriptions: [
      "Permitted stock investors to compare various stocks’ performance.",
      "Extracted stock data from Quandl financial services API and inserted into MySQL database.",
      "Adopted Object-oriented design and MVC, organizing the code for maintainability and scalability."
    ],
    skills: ["Python", "MongoDB", "Jupiter"]
  }
]
