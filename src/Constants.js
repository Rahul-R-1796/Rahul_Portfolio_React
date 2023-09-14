import Bikebooking from "./Assets/Projects/Bikebooking.PNG";
import Stackoverflow from "./Assets/Projects/Stackoverflow.PNG";

export const PROJECTS = [
  {
    image: Bikebooking,
    name: "Bike Service Booking System",
    technologyUsed: "MERN (MongoDB, Express.js, React, Node.js), JavaScript",
    description: "Designed and developed a MERN-based Bike Service Booking App, offering users the convenience of reserving service slots in advance. 
      The app features three daily booking slots, while an exclusive admin panel enables administrators to access and manage booking details, 
  including the ability to cancel reservations, ensuring efficient service operations..",
    url: "https://64bff69778b4c600867df6dd--snazzy-alpaca-58be59.netlify.app/",
    githubLink:"https://github.com/Rahul-R-1796/Bike_Service_App/"
  },

    {
    image: Stackoverflow,
    name: "Stack Overflow Clone Website",
    technologyUsed: "MERN (MongoDB, Express.js, React, Node.js)",
    description: "This MERN Stack Overflow clone, featuring user authentication, Q&A functionality, 
      robust search capabilities, and a voting system. Users can add friends, and manage friend requests. 
      The platform fosters a vibrant programming community, with a dedicated notifications page for friend requests and question interactions.",
    url: "https://stackverflow-clone.vercel.app/",
    githubLink:"https://github.com/Rahul-R-1796/Stackverflow_Clone"
  },

];

export const SKILLS = [
  { name: "ReactJs", initialRating: 3 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "Expressjs", initialRating: 3 },
  { name: "MongoDb", initialRating: 3 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Postman"]
