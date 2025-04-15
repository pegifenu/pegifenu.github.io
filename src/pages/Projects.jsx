import { useState } from "react";
import { Dialog } from "radix-ui";

import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";
import ProjectDialog from "../components/ProjectDialog";

const Projects = () => {
  const projects = [
    {
        image: "https://placehold.co/300x200",
        title: "Gameboxd",
        desc: "An old website.",
        dateEnded: "2025-03-13",
        category: "webapp",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
        image: "https://placehold.co/300x200",
        title: "Heavy Tailed Reward Distributions for Multiplayer Bandits",
        desc: "Research paper.",
        dateEnded: "2025-03-30",
        category: "research",
        tags: [],
    },
    {
        image: "https://placehold.co/300x200",
        title: "Website V1",
        desc: "An old website.",
        category: "webapp",
        tags: ["HTML", "CSS", "JS"],
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-4">
                    {displayedProjects.map((project, index) => (
                        <Dialog.Trigger asChild key={index}>
                            <div onClick={() => setSelectedProject(project)}>
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    desc={project.desc}
                                    tags={project.tags}
                                />
                            </div>
                        </Dialog.Trigger>
                    ))}
                </div>

                {selectedProject && <ProjectDialog selectedProject={selectedProject} />}

            </Dialog.Root>
            
                
        </div>
    );
}

export default Projects;