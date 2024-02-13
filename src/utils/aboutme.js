export const persona = {
  name: "Trevor Tran",
  title: "Software Engineer",
  headline: "Motivated to learn and grow, ready to make an impact as a Software Engineer",
  intro: [
    `Driven by a lifelong passion for technology, I'm a Software Engineer honing my skills through the Per Scholas program and CS degree from University of Washington.
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
      start: "Oct. 2019",
      end: "Mar. 2020"
    },
    descriptions: [
      "Implemented and managed a new job tracking feature, streamlining customer access to real-time labor hour data.",
      "Successfully designed and deployed DynamoDB tables and RESTful APIs on AWS through utilization of Serverless framework.",
      "Conducted simulation and testing on Android and iOS platforms, resulting in a successful prototype demonstration to clients within a tight deadline."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "AWS", "Severless Framework"]
  },
  {
    title: "Undergrad Research Assistant",
    company: "University of Washington",
    date: {
      start: "Jan.2020",
      end: "Dec. 2019"
    },
    descriptions: [
      "Conducted thorough analysis of data points in a national dataset to identify and rectify incorrect curb data in specific locations.",
      "Utilized technical skills in NodeJS, ExpressJS, and Turf to create an automated data processing pipeline, eliminating the need for manual data extraction and saving 20 hours per week for the research team."
    ],
    skills: ["JavaScript", "React", "NodeJS"]
  },
  {
    title: "Undergrad Research Assistant",
    company: "South Seattle College",
    date: {
      start: "Jan. 2017",
      end: "Mar. 2017"
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
    title: "Collaborative Whiteboard",
    url: "https://trevortran.com/whiteboard",
    image: "whiteboard-preview.png",
    date: {
      start: "Dec. 2023",
      end: "Feb. 2024"
    },
    descriptions: [
      "Developed and implemented an interactive tool using software development skills to enhance team collaboration and demonstration.",
      "Successfully facilitated virtual brainstorming sessions, enabling teams to effectively visualize and streamline the creative process.",
      "Utilized technical skills in HTML, CSS, JavaScript, and ReactJS to optimize performance and enhance user experience."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "NodeJS", "MUI", "Socket.IO"]
  },
  {
    title: "Portfolio Website",
    url: "https://trevortran.com",
    image: "portfolio-preview.png",
    date: {
      start: "Dec.2023",
      end: "Jan. 2024"
    },
    descriptions: [
      "Developed a responsive personal portfolio website to showcase software development projects, resulting in increased visibility and engagement.",
      "Enhanced website performance and usability by implementing SEO best practices to achieve over 1400 daily requests.",
      "Engineered and deployed a robust portfolio website on AWS EC2 instances with auto-scaling configuration behind an Elastic Load Balancer, achieving 99.99% uptime and enhancing security, thereby ensuring seamless user experience even during high-traffic periods."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "MUI"]
  },
  {
    title: "Stock Performance",
    date: {
      start: "Jan. 2018",
      end: "Mar. 2018"
    },
    descriptions: [
      "Permitted stock investors to compare various stocks’ performance.",
      "Extracted stock data from Quandl financial services API and inserted into MySQL database.",
      "Adopted Object-oriented design and MVC, organizing the code for maintainability and scalability."
    ],
    skills: ["Java", "JavaScript", "React", "HTML/CSS", "MySQL"]
  }
]
