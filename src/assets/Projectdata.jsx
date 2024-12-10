import influx from "./influx.png";
import upsideAvenue from "./upsideAvenue.png";
import checkers from "./checkers.png";
import penny from "./penny.png";

export const Projectdata = [
  {
    img: penny,
    title: "Penny",
    subtitle: "Personal Project",
    desc: [
      "Penny—an expense tracker to help you monitor your spending. Penny allows users to log transactions, manage accounts and provides monthly spending analysis based on predefined categories like groceries, travel, food, shopping, rent, etc. ",
    ],
    tech_stack: ["Kotlin", "Firebase Authentication", "Firebase Firestore"],
    link: "https://github.com/chindaronit/penny",
  },
  {
    img: influx,
    title: "Influx",
    subtitle: "Personal Project",
    desc: [
      "Influx is an OTT Platform provides seemless streaming experience with simple and interactive interface with personalised recommender system.",
    ],
    tech_stack: ["MongoDB", "React.js", "Node.js", "Docker", "AWS"],
    link: "https://github.com/chindaronit/influx",
  },
  {
    img: upsideAvenue,
    title: "Upside Avenue",
    subtitle: "Group Project",
    desc: [
      "UpsideAvenue provides a real estate platform for property listings, buyer-seller interactions, and agent mediation",
    ],
    tech_stack: ["HTML", "CSS", "Spring Boot", "Bootstrap", "Mysql"],
    link: "https://github.com/chindaronit/upSideAvenue",
  },
  {
    img: checkers,
    title: "Standard Checkers",
    subtitle: "Under Prof. Aparjita Dutta",
    desc: [
      "Enhanced gaming experience with AI opponents",
      "Customize AI performance through game difficulty settings",
      "Implemented Minimax Algorithm with Alpha-Beta Pruning algorithm.",
    ],
    tech_stack: ["Python", "Pygame"],
    link: "https://github.com/chindaronit/Checkers-TicTacToe",
  },
];
