import { CategoryEnum, TagEnum } from "../constants";
import WebsiteV1 from "../components/project_descriptions/WebsiteV1";
import Gameboxd from "../components/project_descriptions/Gameboxd";
const projects = [
  {
    image: "/images/gameboxd-logo-solid.png",
    title: "Gameboxd",
    summary:
      "GameBoxd is a full-stack web application designed for gamers to track their favorite games, write and share reviews, and connect with friends in a vibrant gaming community.",
    DescriptionComponent: Gameboxd,
    dateEnded: "2025-03-13",
    category: CategoryEnum.WEBAPP,
    tags: [
      TagEnum.MONGODB,
      TagEnum.EXPRESSJS,
      TagEnum.REACT,
      TagEnum.NODEJS,
      TagEnum.HTML,
      TagEnum.CSS,
      TagEnum.JAVASCRIPT,
    ],
  },
  {
    image: "/images/website-v1.png",
    title: "Personal Website V1",
    summary: "An old website.",
    DescriptionComponent: WebsiteV1,
    dateEnded: "2024-12-01",
    category: CategoryEnum.WEBAPP,
    tags: [TagEnum.HTML, TagEnum.CSS, TagEnum.JAVASCRIPT],
  },
];

export default projects;
