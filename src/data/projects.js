import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const projects = [
    {
        image: "/images/gameboxd-logo-solid.png",
        title: "Gameboxd",
        description: "An old website.",
        dateEnded: "2025-03-13",
        category: CategoryEnum.WEBAPP,
        tags: [TagEnum.MONGODB, TagEnum.EXPRESSJS, TagEnum.REACT, TagEnum.NODEJS, TagEnum.HTML, TagEnum.CSS, TagEnum.JAVASCRIPT],
    },
    {
        image: "https://placehold.co/300x150",
        title: "Heavy Tailed Reward Distributions for Multiplayer Bandits",
        description: "Research paper.",
        dateEnded: "2025-03-30",
        category: CategoryEnum.RESEARCH,
        tags: [TagEnum.LATEX],
    },
    {
        image: "/images/website-v1.png",
        title: "Personal Website V1",
        description: "An old website.",
        dateEnded: "2024-12-01",
        category: CategoryEnum.WEBAPP,
        tags: [TagEnum.HTML, TagEnum.CSS, TagEnum.JAVASCRIPT],
    },
]

export default projects;