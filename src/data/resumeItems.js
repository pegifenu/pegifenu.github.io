import { TagEnum } from "../constants";

const experiences = [
  {
    image: "/images/aops.svg",
    company: "Art of Problem Solving",
    title: "Online School Grader",
    location: "Online",
    startDate: "2025-09-10",
    endDate: "",
    description: "",
    bulletList: [],
    tags: [TagEnum.LATEX],
  },
  {
    image: "/images/acm.png",
    company: "UCLA ACM",
    title: "Dev Team Officer",
    location: "Los Angeles, California",
    startDate: "2025-03-13",
    endDate: "",
    description: "Board member for the largest CS club on campus!",
    bulletList: [
      "Developed main website (https://www.uclaacm.com/) by addressing GitHub issues.",
    ],
    tags: [TagEnum.REACT],
  },
];

export default experiences;
