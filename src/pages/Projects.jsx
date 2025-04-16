import { useState } from "react";
import { Dialog } from "radix-ui";

import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";

import { CategoryEnum, SortEnum, TagEnum } from "../constants";

const Projects = () => {
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

    const [selectedProject, setSelectedProject] = useState(null);

    const [displayedProjects, setDisplayedProjects] = useState(projects);

    return (
        <div>
            <PageNav
                displayedProjects={displayedProjects}
                setDisplayedProjects={setDisplayedProjects}
                projects={projects}
            />

            <Dialog.Root>
                {displayedProjects.length != 0 && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-4">
                    {displayedProjects.map((project, index) => (
                        <Dialog.Trigger asChild key={index}>
                            <div onClick={() => setSelectedProject(project)}>
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                />
                            </div>
                        </Dialog.Trigger>
                    ))}
                </div>}

                {selectedProject && <ProjectDialog selectedProject={selectedProject} />}

            </Dialog.Root>
            {displayedProjects.length == 0 && <div className="text-white px-10 py-4">No projects were found under this category.</div>}
                
        </div>
    );
}

export default Projects;