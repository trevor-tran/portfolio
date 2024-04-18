export const persona = {
  name: "Trevor Tran",
  title: "Software Engineer",
  headline: "Motivated to learn and grow, ready to make an impact as a Software Engineer",
  intro: [
    `
    Driven by a lifelong passion for technology, I am a Software Engineer with a robust foundation in both the practical and theoretical aspects of software development.
    My educational journey through the Per Scholas program and a Computer Science degree from the University of Washington has endowed me with a broad skill set, covering front-end and back-end development, along with technology integration.
    My professional growth is further highlighted by hands-on experiences at Xemelgo and Hajo, where I applied my skills in real-world scenarios.
    Additionally, earning an AWS certification is a testament to my continuous learning journey.`,
    `Outside of my professional commitments, I find joy in seamlessly integrating my days with the wonders of nature during the summer season through fascinating hikes or serene kayaking adventures.
    Balancing my summer adventures with enthusiasm to DIY home improvement, I embrace perpetual growth and often research and learn new skills to complete various tasks around the house.`
  ]
}

export const experiences = [
  {
    title: "Software Engineer",
    company: "Hajo",
    date: {
      start: "June 2022",
      end: "May 2023"
    },
    descriptions: [
      "Developed fault-tolerant and scalable microservices, reliably integrating with internal cloud infrastructure.",
      "Established robust testing and integration environments for comprehensive evaluation and debugging, ensuring adherence to rigorous software development lifecycle standards for high-quality application.",
      "Utilized Agile for updates, sprint planning, and task prioritization, ensuring the team on track with timelines."

    ],
    skills: ["JavaScript", "Golang", "React", "HTML/CSS", "Unit/Integration Tests"]
  },

  {
    title: "Software Engineer Intern",
    company: "Xemelgo",
    date: {
      start: "Oct. 2019",
      end: "Mar. 2020"
    },
    descriptions: [
      'Led a team to develop "Job Tracking" feature from concept through implementation to launch.',
      "Drove backend development on AWS, utilizing DynamoDB, RESTful APIs, and Serverless Framework.",
      "Ensured codebase reliability by crafting unit tests with Jest for JavaScript codebases and Postman for RESTful API assessments, alongside validating frontend compatibility on Android and iOS simulators."

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
    title: "Stock Comparator",
    url: "https://trevortran.com/stockcomparator",
    date: {
      start: "Feb. 2024",
      end: "Present"
    },
    descriptions: [
      "Developed a stock comparison tool by analyzing historical data, integrating a MySQL caching mechanism.",
      "Designed and implemented RESTful APIs, enabling querying data and an autocomplete for stock ticker searches.",
      "Applied Object Oriented Design and SOLID principles for improving maintainability, scalability, and reliability."
    ],
    skills: ["Java", "JavaScript", "React", "HTML/CSS", "MySQL", "Spring", "Hibernate"]
  },
  {
    title: "Portfolio Website",
    url: "https://trevortran.com",
    image: "portfolio-preview.png",
    date: {
      start: "Dec.2023",
      end: "Feb. 2024"
    },
    descriptions: [
      "Leveraged AWS for secure, scalability with features like auto-scaling and load balancing to optimize performance.",
      "Automated EC2 setup, ensured code quality with Jest, and launched a CI/CD pipeline for zero-downtime updates.",
      "Adopted CloudWatch for monitoring and visualization of metrics, enhancing system visibility, and utilized S3 for logging user requests, facilitating efficient issue resolution and performance optimization."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "MUI"]
  },
  {
    title: "Collaborative Whiteboard",
    url: "https://trevortran.com/whiteboard",
    image: "whiteboard-preview.png",
    date: {
      start: "Dec. 2023",
      end: "Feb. 2024"
    },
    descriptions: [
      "Created a real-time collaborative whiteboard to foster innovative teamwork and enhance remote collaboration.",
      "Utilized React to boost rendering efficiency; optimized WebSocket data transmission for enhanced performance."
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "SCSS", "Bootstrap", "NodeJS", "MUI", "Socket.IO"]
  }
]
